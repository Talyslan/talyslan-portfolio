/// <reference types="vite/client" />

import { z } from 'zod';

export const envSchema = z.object({
    VITE_GITHUB_TOKEN: z.string(),
    VITE_RESEND_API_KEY: z.string(),
});

export const env = envSchema.parse(import.meta.env);

export type AppConfig = typeof env;
