import type { ContactFormData } from '../ContactForm/schema';

export async function SendEmailAction(data: ContactFormData) {
    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) {
            throw new Error('Request failed');
        }

        return {
            success: true,
            message: 'Email sent successfully!',
        };
    } catch (error) {
        console.error('SendEmailAction error:', error);

        return {
            success: false,
            message: 'Failed to send email. Please try again later.',
        };
    }
}
