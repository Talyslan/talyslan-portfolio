import { motion } from 'framer-motion';
import {
    LEVEL_DESCRIPTION,
    LEVEL_WIDTH,
    SKILL_CATEGORIES,
    TECH_STACK,
} from './data';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden py-32">
            {/* Background */}
            <div className="from-background via-card/30 to-background absolute inset-0 bg-linear-to-b" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="mx-auto max-w-6xl">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-20 text-center"
                    >
                        <span className="text-primary font-mono text-sm tracking-wider">
                            EXPERTISE
                        </span>
                        <h2 className="mt-4 mb-6 text-4xl font-bold md:text-5xl">
                            Tech <span className="text-gradient">Stack</span>
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Technologies I use to design, build, and maintain
                            reliable web systems
                        </p>
                    </motion.div>

                    {/* Tech Icons Row */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-20 flex flex-wrap justify-center gap-4"
                    >
                        {TECH_STACK.map((tech, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="group relative"
                            >
                                <div className="bg-card/50 border-border/50 hover:border-primary/50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] md:h-20 md:w-20">
                                    <span className="text-primary font-mono text-xl font-bold md:text-2xl">
                                        {tech.abbr}
                                    </span>
                                </div>

                                <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                                    <span className="text-muted-foreground font-mono text-xs whitespace-nowrap">
                                        {tech.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Skills by Category */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-8 md:grid-cols-2"
                    >
                        {SKILL_CATEGORIES.map((category, categoryIndex) => (
                            <motion.div
                                key={categoryIndex}
                                variants={itemVariants}
                                className="group bg-card/30 border-border/50 hover:border-primary/30 rounded-2xl border p-6 backdrop-blur-sm transition-all duration-500"
                            >
                                {/* Category Header */}
                                <div className="mb-6 flex items-center gap-3">
                                    <div
                                        className={`h-8 w-1 rounded-full bg-linear-to-b ${category.color}`}
                                    />
                                    <h3 className="text-xl font-semibold">
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills */}
                                <div className="space-y-4">
                                    {category.skills.map(
                                        (skill, skillIndex) => (
                                            <div
                                                key={skillIndex}
                                                className="group/skill"
                                            >
                                                <div className="mb-2 flex items-center justify-between">
                                                    <span className="text-foreground/80 text-sm font-medium">
                                                        {skill.name}
                                                    </span>

                                                    <div className="group/level relative">
                                                        <span className="text-primary cursor-help font-mono text-xs">
                                                            {skill.level}
                                                        </span>

                                                        <div className="bg-card text-muted-foreground pointer-events-none absolute -top-14 right-0 z-20 w-64 translate-y-1 rounded-md px-3 py-2 text-xs opacity-0 shadow-md transition-all duration-200 ease-out group-hover/level:translate-y-0 group-hover/level:opacity-100">
                                                            {
                                                                LEVEL_DESCRIPTION[
                                                                    skill.level
                                                                ]
                                                            }
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-secondary/50 h-1.5 overflow-hidden rounded-full">
                                                    <motion.div
                                                        className={`h-full rounded-full bg-linear-to-r ${category.color}`}
                                                        initial={{ width: 0 }}
                                                        whileInView={{
                                                            width: `${LEVEL_WIDTH[skill.level]}%`,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                            delay:
                                                                skillIndex *
                                                                0.05,
                                                            ease: 'easeOut',
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
