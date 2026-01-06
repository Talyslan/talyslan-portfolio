import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectDialogProps {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}

export function ProjectDialog({ project, open, onClose }: ProjectDialogProps) {
    return (
        <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
            <AnimatePresence>
                {open && project && (
                    <DialogContent forceMount className="overflow-hidden p-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.96, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 20 }}
                            transition={{
                                type: 'spring',
                                damping: 25,
                                stiffness: 300,
                            }}
                            className="flex max-h-[90vh] flex-col"
                        >
                            <div className="relative h-64 overflow-hidden md:h-96">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover"
                                />
                                <div className="from-background via-background/40 absolute right-0 bottom-0 left-0 h-40 bg-linear-to-t to-transparent" />
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 md:p-8">
                                <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                                    {project.title}
                                </h2>

                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="bg-primary/10 text-primary border-primary/20 rounded-lg border px-3 py-1.5 font-mono text-sm"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.live !== '' && (
                                        <Button asChild>
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Live Demo
                                            </a>
                                        </Button>
                                    )}

                                    {project.github && (
                                        <Button variant="outline" asChild>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="mr-2 h-4 w-4" />
                                                Source Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </DialogContent>
                )}
            </AnimatePresence>
        </Dialog>
    );
}
