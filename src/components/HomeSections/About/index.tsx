import { Code2, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { Trans, useTranslation } from 'react-i18next';

export function About() {
    const { t } = useTranslation();

    const highlights = [
        {
            icon: Code2,
            key: 'architecture',
        },
        {
            icon: Rocket,
            key: 'performance',
        },
        {
            icon: Users,
            key: 'collaboration',
        },
    ];

    return (
        <section id="about" className="relative py-20">
            <div className="from-card/20 via-background to-background absolute inset-0 bg-linear-to-b" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-20 text-center"
                    >
                        <span className="text-primary font-mono text-sm tracking-wider uppercase">
                            {t('about.tinyTitle')}
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            {t('about.title1')}{' '}
                            <span className="text-gradient">
                                {t('about.title2')}
                            </span>
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            {t('about.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid items-start gap-16 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="space-y-6"
                        >
                            <p className="text-muted-foreground leading-relaxed">
                                {t('about.description1')}
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <Trans
                                    i18nKey="about.techStack"
                                    components={{
                                        tech: (
                                            <span className="text-primary font-medium" />
                                        ),
                                    }}
                                />
                            </p>

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
                                        <span className="text-primary">
                                            const
                                        </span>{' '}
                                        developer = {'{'}
                                        <br />
                                        <span className="ml-4">
                                            name:{' '}
                                            <span className="text-emerald-400">
                                                "{t('about.code.name')}"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            role:{' '}
                                            <span className="text-emerald-400">
                                                "{t('about.code.role')}"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            location:{' '}
                                            <span className="text-emerald-400">
                                                "{t('about.code.location')}"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            passion:{' '}
                                            <span className="text-emerald-400">
                                                "{t('about.code.passion')}"
                                            </span>
                                        </span>
                                        <br />
                                        {'}'};
                                    </code>
                                </div>
                            </motion.div>
                        </motion.div>

                        <div className="space-y-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}
                                    whileHover={{ x: 5 }}
                                    className="group relative"
                                >
                                    <div className="from-primary/5 absolute inset-0 rounded-xl bg-linear-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    <div className="bg-card/30 border-border/50 hover:border-primary/30 relative rounded-xl border p-6 backdrop-blur-sm transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <motion.div
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: 5,
                                                }}
                                                className="bg-primary/10 text-primary rounded-xl p-3"
                                            >
                                                <item.icon className="h-6 w-6" />
                                            </motion.div>
                                            <div>
                                                <h3 className="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
                                                    {t(
                                                        `about.highlights.${item.key}.title`,
                                                    )}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {t(
                                                        `about.highlights.${
                                                            item.key
                                                        }.description`,
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
