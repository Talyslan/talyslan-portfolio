import { useState } from 'react';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { projects } from './data';
import { ProjectDialog } from './[id]';

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

                    <div className="grid gap-6 md:grid-cols-3">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.5,
                                }}
                                onClick={() => setSelectedProject(project)}
                                className="group relative cursor-pointer"
                            >
                                <div
                                    className={`absolute inset-0 rounded-2xl bg-linear-to-br ${project.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                                />

                                <div className="bg-card/50 border-border/50 hover:border-primary/30 relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-60"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            <span className="bg-primary/90 text-primary-foreground rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                                View Details
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="group-hover:text-primary mb-2 text-xl font-semibold transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-4 text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-secondary/50 text-muted-foreground rounded-md px-2.5 py-1 font-mono text-xs"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

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
