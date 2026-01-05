import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    return (
        <footer className="border-border/50 bg-card/20 border-t py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="text-muted-foreground flex items-center gap-2">
                        <Terminal className="text-primary h-4 w-4" />
                        <span className="font-mono text-sm">
                            Built by{' '}
                            <span className="text-primary">
                                Talyslan C. P. Canabarro
                            </span>
                        </span>
                    </div>

                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: 'https://github.com' },
                            { icon: Linkedin, href: 'https://linkedin.com' },
                            {
                                icon: Mail,
                                href: 'mailto:talyslancpc@gmail.com',
                            },
                        ].map(({ icon: Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target={
                                    href.startsWith('mailto')
                                        ? undefined
                                        : '_blank'
                                }
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="text-muted-foreground hover:text-primary rounded-lg p-2 transition-colors"
                            >
                                <Icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
