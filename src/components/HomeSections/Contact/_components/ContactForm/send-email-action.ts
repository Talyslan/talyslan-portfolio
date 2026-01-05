import type { ContactFormData } from '../ContactForm/schema';

export async function SendEmailAction(data: ContactFormData) {
    console.log(data);
    try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            success: true,
            message: 'Email sent successfully!',
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('SendEmailAction error:', error);

        return {
            success: false,
            message:
                error?.message ||
                'Failed to send email. Please try again later.',
        };
    }
}
