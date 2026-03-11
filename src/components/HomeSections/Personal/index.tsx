import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { hobbies_data, mediaItems_data } from './data';

export function Personal() {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const mediaItems = mediaItems_data;
    const hobbies = hobbies_data;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [mediaItems.length]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % mediaItems.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + mediaItems.length) % mediaItems.length,
        );
    };

    return (
        <section id="personal" className="relative py-20">
            <div className="from-background via-card/20 to-background absolute inset-0 bg-linear-to-b" />

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
                            {t('personal.tinyTitle')}
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            {t('personal.title1')}{' '}
                            <span className="text-gradient">
                                {t('personal.title2')}
                            </span>
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            {t('personal.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid items-center gap-16 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="group relative overflow-hidden rounded-3xl shadow-2xl">
                                <div className="relative aspect-4/3 overflow-hidden">
                                    <AnimatePresence mode="wait">
                                        {mediaItems[currentIndex].type ===
                                        'image' ? (
                                            <motion.img
                                                key={currentIndex}
                                                src={
                                                    mediaItems[currentIndex].src
                                                }
                                                alt={t(
                                                    mediaItems[currentIndex]
                                                        .captionKey,
                                                )}
                                                initial={{
                                                    opacity: 0,
                                                    scale: 1.05,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: 'easeInOut',
                                                }}
                                                className="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <motion.video
                                                key={currentIndex}
                                                src={
                                                    mediaItems[currentIndex].src
                                                }
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                initial={{
                                                    opacity: 0,
                                                    scale: 1.05,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    scale: 0.95,
                                                }}
                                                transition={{
                                                    duration: 0.6,
                                                    ease: 'easeInOut',
                                                }}
                                                className="h-full w-full object-cover"
                                            />
                                        )}
                                    </AnimatePresence>

                                    <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-linear-to-t from-black/90 via-black/70 to-transparent" />

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={`caption-${currentIndex}`}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.2,
                                            }}
                                            className="absolute right-0 bottom-14 left-0 z-10 px-6"
                                        >
                                            <p className="text-center text-sm font-medium text-white drop-shadow-lg">
                                                {t(
                                                    mediaItems[currentIndex]
                                                        .captionKey,
                                                )}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>

                                    <button
                                        onClick={prevImage}
                                        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/40"
                                        aria-label="Previous image"
                                    >
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M15 19l-7-7 7-7"
                                            />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-black/20 p-2.5 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 hover:bg-black/40"
                                        aria-label="Next image"
                                    >
                                        <svg
                                            className="h-5 w-5 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>

                                    <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                                        {mediaItems.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    setCurrentIndex(index)
                                                }
                                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                                    index === currentIndex
                                                        ? 'w-8 bg-white'
                                                        : 'w-1.5 bg-white/40 hover:bg-white/60'
                                                }`}
                                                aria-label={`Go to media ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="order-1 space-y-8 lg:order-2"
                        >
                            <div className="space-y-5">
                                <h3 className="text-muted-foreground text-lg font-medium">
                                    {t('personal.hobbiesTitle')}
                                </h3>
                                <div className="flex flex-wrap items-center justify-center gap-6">
                                    {hobbies.map((hobby, index) => (
                                        <motion.div
                                            key={hobby.key}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: index * 0.1,
                                                duration: 0.4,
                                            }}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            className="group flex flex-col items-center gap-3"
                                        >
                                            <div
                                                className={`rounded-2xl p-4 ${hobby.iconColor} bg-current/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-current/20 group-hover:shadow-lg`}
                                            >
                                                <hobby.icon className="h-7 w-7" />
                                            </div>
                                            <span className="group-hover:text-primary text-sm font-medium transition-colors">
                                                {t(
                                                    `personal.hobbies.${hobby.key}.title`,
                                                )}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="via-border h-px bg-linear-to-r from-transparent to-transparent" />

                            <div className="space-y-6">
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {t('personal.education')}
                                </p>
                                <p className="text-muted-foreground text-base leading-relaxed">
                                    {t('personal.experience')}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
