import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
            <div className="from-background via-background to-primary/5 absolute inset-0 bg-linear-to-br" />

            <motion.div
                className="bg-primary/5 absolute top-1/4 left-1/4 h-125 w-125 rounded-full blur-[100px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.div
                className="bg-primary/3 absolute right-1/4 bottom-1/4 h-100 w-100 rounded-full blur-[80px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 0.9, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--primary)_1px,transparent_1px),linear-gradient(90deg,var(--primary)_1px,transparent_1px)] bg-size-[80px_80px] opacity-[0.02]" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-5xl">
                    <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: 'easeOut',
                            }}
                            className="relative"
                        >
                            <div className="relative h-48 w-48 md:h-64 md:w-64">
                                <motion.div
                                    className="from-primary via-primary/50 to-primary absolute inset-0 rounded-full bg-linear-to-r blur-xl"
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        scale: [1, 1.05, 1],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                <div className="border-primary/30 bg-card relative h-full w-full overflow-hidden rounded-full border-2">
                                    <img
                                        src={'/avatar.jpg'}
                                        alt="Talyslan C. P. Canabarro"
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                <motion.div
                                    className="border-background absolute right-14 bottom-2 h-5 w-5 rounded-full border-3 bg-emerald-500"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                    }}
                                />
                            </div>
                        </motion.div>

                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="bg-card/50 border-border/50 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
                            >
                                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                                <span className="text-muted-foreground font-mono text-sm">
                                    Available for work
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
                            >
                                <span className="text-foreground">
                                    Talyslan
                                </span>{' '}
                                <span className="text-gradient">
                                    C. P. Canabarro
                                </span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-muted-foreground mb-6 font-mono text-lg md:text-xl"
                            >
                                <span className="text-primary">{'>'}</span>{' '}
                                Fullstack Developer
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-muted-foreground mb-8 max-w-xl text-lg leading-relaxed"
                            >
                                Software Engineer and Computer Science student
                                focused on building modern, scalable web
                                applications with TypeScript, React, and
                                Next.js, driven by clean architecture and great
                                user experiences.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mb-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
                            >
                                <Button
                                    size="lg"
                                    className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
                                    onClick={() =>
                                        document
                                            .getElementById('projects')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }
                                >
                                    View My Work
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-card/30 hover:border-primary hover:text-primary hover:bg-muted border-muted/50 backdrop-blur-sm/50"
                                    onClick={() =>
                                        document
                                            .getElementById('contact')
                                            ?.scrollIntoView({
                                                behavior: 'smooth',
                                            })
                                    }
                                >
                                    Get in Touch
                                </Button>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                                className="flex items-center justify-center gap-4 lg:justify-start"
                            >
                                {[
                                    {
                                        icon: Github,
                                        href: 'https://github.com',
                                        label: 'GitHub',
                                    },
                                    {
                                        icon: Linkedin,
                                        href: 'https://linkedin.com',
                                        label: 'LinkedIn',
                                    },
                                    {
                                        icon: Mail,
                                        href: 'mailto:hello@example.com',
                                        label: 'Email',
                                    },
                                ].map(({ icon: Icon, href, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target={
                                            href.startsWith('mailto')
                                                ? undefined
                                                : '_blank'
                                        }
                                        rel="noopener noreferrer"
                                        className="bg-card/50 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 rounded-xl border p-3 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                                        whileHover={{
                                            scale: 1.05,
                                            y: -2,
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="absolute -bottom-38 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                >
                    <div className="border-border/50 bg-card/30 rounded-full border p-2 backdrop-blur-sm">
                        <ArrowDown className="text-muted-foreground h-4 w-4" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
