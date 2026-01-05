import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Send } from 'lucide-react';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, type ContactFormData } from './schema';
import { useRef, useState } from 'react';
import { SendEmailAction } from './send-email-action';

export function ContactForm() {
    const [lastSubmit, setLastSubmit] = useState(0);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const honeypotRef = useRef<HTMLInputElement>(null);

    const onSubmit = async (data: ContactFormData) => {
        // honeypot check
        if (honeypotRef.current?.value) return;

        // rate limit
        // eslint-disable-next-line react-hooks/purity
        const now = Date.now();
        if (now - lastSubmit < 15000) {
            toast.error('Please wait a few seconds before sending again.');
            return;
        }
        setLastSubmit(now);

        // send email
        const { success } = await SendEmailAction(data);

        if (success) {
            toast('Message sent!', {
                description:
                    "Thanks for reaching out. I'll get back to you soon!",
            });
            reset();
        } else {
            toast.error('Failed to send message. Try again later.');
        }
    };

    return (
        <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-card/30 border-border/50 space-y-6 rounded-2xl border p-8 backdrop-blur-sm"
        >
            <input
                type="text"
                ref={honeypotRef}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                name="website"
            />

            <div className="mb-6">
                <h3 className="text-xl font-semibold">Send me a message</h3>
                <p className="text-muted-foreground text-sm">
                    Fill the form below and I’ll get back to you as soon as
                    possible.
                </p>
            </div>

            <div>
                <label
                    htmlFor="name"
                    className="text-muted-foreground mb-2 block text-sm font-medium"
                >
                    Name
                </label>
                <Input
                    id="name"
                    placeholder="Jack Frost"
                    {...register('name')}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
                <AnimatePresence>
                    {errors.name && (
                        <motion.p
                            key="name-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-destructive mt-1 text-xs"
                        >
                            {errors.name.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <div>
                <label
                    htmlFor="email"
                    className="text-muted-foreground mb-2 block text-sm font-medium"
                >
                    Email
                </label>
                <Input
                    id="email"
                    type="email"
                    placeholder="jackfrost@example.com"
                    {...register('email')}
                    className="bg-background/50 border-border/50 focus:border-primary transition-colors"
                />
                <AnimatePresence>
                    {errors.email && (
                        <motion.p
                            key="email-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-destructive mt-1 text-xs"
                        >
                            {errors.email.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <div>
                <label
                    htmlFor="message"
                    className="text-muted-foreground mb-2 block text-sm font-medium"
                >
                    Message
                </label>
                <Textarea
                    id="message"
                    rows={10}
                    placeholder="Tell me about your idea, project or challenge..."
                    {...register('message')}
                    className="bg-background/50 border-border/50 focus:border-primary max-h-42 w-full resize-none transition-colors"
                />
                <AnimatePresence>
                    {errors.message && (
                        <motion.p
                            key="message-error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="text-destructive mt-1 text-xs"
                        >
                            {errors.message.message}
                        </motion.p>
                    )}
                </AnimatePresence>
            </div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                >
                    {isSubmitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                        </>
                    )}
                </Button>
            </motion.div>
        </motion.form>
    );
}
