import { Code2, Rocket, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
    const highlights = [
        {
            icon: Code2,
            title: 'Clean Architecture',
            description:
                'Designing codebases with clear boundaries, strong abstractions, and long-term maintainability in mind.',
        },
        {
            icon: Rocket,
            title: 'Performance & Scalability',
            description:
                'Building efficient systems that scale well, balancing performance, reliability, and user experience.',
        },
        {
            icon: Users,
            title: 'Collaborative Engineering',
            description:
                'Working closely with teams, aligning technical decisions with product goals and real-world constraints.',
        },
    ];

    return (
        <section id="about" className="relative overflow-hidden py-32">
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
                        <span className="text-primary font-mono text-sm tracking-wider">
                            ABOUT
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            About <span className="text-gradient">Me</span>
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Fullstack developer building scalable,
                            well-architected web applications
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
                                I'm a fullstack developer with expertise in
                                modern web technologies. I'm a fullstack
                                developer focused on building scalable and
                                well-architected web applications. My background
                                combines formal technical education, hands-on
                                project experience, and real-world problem
                                solving in production systems.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I work mainly with{' '}
                                <span className="text-primary font-medium">
                                    TypeScript
                                </span>
                                ,{' '}
                                <span className="text-primary font-medium">
                                    React
                                </span>
                                , and{' '}
                                <span className="text-primary font-medium">
                                    Next.js
                                </span>{' '}
                                building modern frontends with a strong focus on
                                performance, accessibility, and maintainability.
                                On the backend, I use{' '}
                                <span className="text-primary font-medium">
                                    NodeJS{' '}
                                </span>
                                and{' '}
                                <span className="text-primary font-medium">
                                    {' '}
                                    Python
                                </span>
                                , designing APIs, integrations, and systems that
                                scale reliably.
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
                                                "Talyslan C. P. Canabarro"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            role:{' '}
                                            <span className="text-emerald-400">
                                                "Fullstack Developer"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            location:{' '}
                                            <span className="text-emerald-400">
                                                "Maceió, AL || Remote"
                                            </span>
                                            ,
                                        </span>
                                        <br />
                                        <span className="ml-4">
                                            passion:{' '}
                                            <span className="text-emerald-400">
                                                "Solving real-world problems
                                                with code"
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
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {item.description}
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
