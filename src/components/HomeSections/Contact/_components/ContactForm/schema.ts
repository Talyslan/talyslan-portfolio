import { z } from 'zod';
import type { TFunction } from 'i18next';

export const contactSchema = (t: TFunction) =>
    z.object({
        name: z.string().min(2, t('contact.form.nameError')),
        email: z.string().email(t('contact.form.emailError')),
        message: z.string().min(10, t('contact.form.messageError')),
    });

export type ContactFormData = z.infer<ReturnType<typeof contactSchema>>;
