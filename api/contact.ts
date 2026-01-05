import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';
import { z } from 'zod';
import { serverEnv } from './env.js';
import { HTMLTemplate } from './utils/html-templates.js';
import { isRateLimited } from './utils/is-rate-limited.js';

const resend = new Resend(serverEnv.RESEND_API_KEY);

const contactSchema = z.object({
    name: z.string().min(2, 'Name must have at least 2 characters'),
    email: z.email('Invalid email address'),
    message: z
        .string()
        .min(10, 'Message must have at least 10 characters')
        .max(2000, 'Message too long'),
    website: z.string().optional(),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const ip =
            (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
            req.socket.remoteAddress ||
            'unknown';

        // rate limit
        if (isRateLimited(ip)) {
            return res.status(429).json({
                error: 'Too many requests. Please try again later.',
            });
        }

        const data = contactSchema.parse(req.body);

        // honeypot
        if (data.website) {
            return res.status(200).json({ success: true });
        }

        await resend.emails.send({
            from: 'Portfolio <onboarding@resend.dev>',
            to: [serverEnv.CONTACT_EMAIL],
            replyTo: data.email,
            subject: `New contact from ${data.name}`,
            html: HTMLTemplate({
                name: data.name,
                email: data.email,
                message: data.message,
            }),
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                error: 'Invalid form data',
                issues: error.issues,
            });
        }

        console.error('Contact API error:', error);

        return res.status(500).json({
            error: 'Internal Server Error',
        });
    }
}
