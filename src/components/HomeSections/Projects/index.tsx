import { useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProjectDialog } from './[id]';
import { ProjectsView } from './_components/ProjectsView';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null,
    );

    return (
        <section id="projects" className="relative overflow-hidden py-32">
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
                        <span className="text-primary font-mono text-sm tracking-wider">
                            PORTFOLIO
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            Featured <span className="text-gradient">Work</span>
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Projects I&apos;ve built and shipped
                        </p>
                    </motion.div>

                    <ProjectsView onSelect={setSelectedProject} />

                    <div className="mt-16 text-center">
                        <Button
                            variant="outline"
                            className="border-primary text-primary"
                        >
                            <Github className="mr-2 h-4 w-4" />
                            View All on GitHub
                        </Button>
                    </div>
                </div>
            </div>

            <ProjectDialog
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
                open={selectedProject !== null}
            />
        </section>
    );
}
