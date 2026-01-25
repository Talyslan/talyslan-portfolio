import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useUser } from '@/hooks/useUser';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
];

export function Navbar() {
    const { t } = useTranslation();
    const { curriculumLink } = useUser();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-background/80 border-border/50 border-b backdrop-blur-lg'
                    : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        to="#home"
                        className="text-primary flex items-center gap-2 font-mono font-semibold"
                    >
                        <Terminal className="h-5 w-5" />
                        <span>talyslan.dev</span>
                    </Link>

                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.key}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
                            >
                                {t(`nav.${link.key}`)}
                            </motion.a>
                        ))}
                        <a
                            href={curriculumLink}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                {t('nav.curriculum')}
                            </Button>
                        </a>
                        <LanguageSwitcher />
                    </div>

                    <button
                        className="text-foreground md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-border/50 border-t py-4 md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.key}
                                    to={link.href}
                                    className="text-muted-foreground hover:text-primary block py-3 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {t(`nav.${link.key}`)}
                                </Link>
                            ))}

                            <div className="mt-4 flex flex-col gap-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="border-primary text-primary w-full"
                                >
                                    {t('nav.curriculum')}
                                </Button>
                                <LanguageSwitcher isExpanded={true} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
