import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
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
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors duration-200"
                            >
                                {link.name}
                            </motion.a>
                        ))}
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                            <Download className="h-4 w-4" />
                            Curriculum
                        </Button>
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
                            className="border-border/50 bg-background/95 border-t py-4 backdrop-blur-lg md:hidden"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className="text-muted-foreground hover:text-primary block py-3 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button
                                variant="outline"
                                size="sm"
                                className="border-primary text-primary mt-4 w-full"
                            >
                                Resume
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
