import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function ScrollToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 600);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed right-6 bottom-8 z-50"
                >
                    <Button
                        size="icon"
                        onClick={scrollToTop}
                        className="rounded-full shadow-lg"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
