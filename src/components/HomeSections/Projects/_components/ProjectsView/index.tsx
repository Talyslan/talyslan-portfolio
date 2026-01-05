import { motion } from 'framer-motion';
import { projectsMocked } from '../../data/data-mocked';
import { MapperProject } from '../../mappers/MapperProject';
import { useGithubFeaturedProjects } from '../../hooks/useGithubFeaturedProjects';
import { ProjectsViewSkeleton } from '../ProjectsViewSkeleton';

interface IProps {
    onSelect: (project: Project) => void;
}

const MAX_TECH = 5;

export function ProjectsView({ onSelect }: IProps) {
    const { data, isLoading, isError } = useGithubFeaturedProjects('talyslan', [
        'guardiao-digital',
        'due-or-die',
        'dialogandomais',
        'maya-ai',
        'notification-service',
        'rick-and-morty',
    ]);

    if (isLoading) return <ProjectsViewSkeleton />;

    if (isError) {
        return (
            <p className="text-muted-foreground">Failed to load projects.</p>
        );
    }

    const projects: Project[] =
        data?.map(MapperProject.mapRepoToProject) ?? projectsMocked;

    return (
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
                    onClick={() => onSelect(project)}
                    className="group relative cursor-pointer"
                >
                    <div
                        className={`absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/20 to-teal-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
                    />

                    <div className="bg-card/50 border-border/50 hover:border-primary/30 relative h-full overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-500">
                        <div className="relative aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                onError={(e) => {
                                    e.currentTarget.src = '/fallback.png';
                                }}
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
                                {project.tech
                                    .slice(0, MAX_TECH)
                                    .map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-secondary/50 text-muted-foreground rounded-md px-2.5 py-1 font-mono text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}

                                {project.tech.length > MAX_TECH && (
                                    <span className="bg-secondary/30 text-muted-foreground rounded-md px-2.5 py-1 font-mono text-xs">
                                        +{project.tech.length - MAX_TECH}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
