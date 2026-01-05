import { z } from 'zod';

export const serverEnvSchema = z.object({
    RESEND_API_KEY: z.string(),
    CONTACT_EMAIL: z.email(),
});

export const serverEnv = serverEnvSchema.parse(process.env);
