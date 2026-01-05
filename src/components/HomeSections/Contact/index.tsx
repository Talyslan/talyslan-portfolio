import { motion } from 'framer-motion';

import { ContactForm } from './_components/ContactForm';
import { Mail, MapPin } from 'lucide-react';
import { useUser } from '@/hooks/useUser';

export function Contact() {
    const { email } = useUser();
    const contactData = [
        {
            icon: Mail,
            label: 'Email',
            value: email,
            href: `mailto:${email}`,
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Maceió, Alagoas || Remote',
        },
    ];

    return (
        <section id="contact" className="relative overflow-hidden py-20">
            <div className="from-background via-card/30 to-background absolute inset-0 bg-linear-to-b" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-20 text-center"
                    >
                        <span className="text-primary font-mono text-sm tracking-wider">
                            CONTACT
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            Let's <span className="text-gradient">Build</span>{' '}
                            Something Together
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Have a project in mind? Let's talk about how we can
                            work together.
                        </p>
                    </motion.div>

                    <div className="grid gap-16 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="mb-4 text-2xl font-semibold">
                                    Let's connect
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Always open to new challenges, side
                                    projects, or just a tech chat. Whether it’s
                                    web development, integrations, or an idea
                                    you’re excited about, I’d love to hear from
                                    you.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {contactData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                        className="bg-card/30 border-border/50 hover:border-primary/30 flex items-center gap-4 rounded-xl border p-4 backdrop-blur-sm transition-all duration-300"
                                    >
                                        <div className="bg-primary/10 text-primary rounded-xl p-3">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-sm">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-foreground hover:text-primary font-medium transition-colors"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-foreground font-medium">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group relative"
                            >
                                <div className="from-primary/10 absolute inset-0 rounded-xl bg-linear-to-r to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                                <div className="bg-card/50 border-border/50 relative rounded-xl border p-5 font-mono text-sm backdrop-blur-sm">
                                    <div className="mb-4 flex items-center gap-2">
                                        <span className="bg-destructive/70 h-3 w-3 rounded-full" />
                                        <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                                        <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
                                    </div>
                                    <code className="text-muted-foreground">
                                        <span className="text-primary">$</span>{' '}
                                        npm run hire-me
                                        <br />
                                        <span className="text-emerald-400">
                                            ✓
                                        </span>{' '}
                                        Open to freelance projects
                                        <br />
                                        <span className="text-emerald-400">
                                            ✓
                                        </span>{' '}
                                        Available for collaboration
                                        <br />
                                        <span className="text-emerald-400">
                                            ✓
                                        </span>{' '}
                                        Always learning
                                        <br />
                                        <span className="text-emerald-400">
                                            ✓
                                        </span>{' '}
                                        Exploring new ideas
                                    </code>
                                </div>
                            </motion.div>
                        </motion.div>

                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
