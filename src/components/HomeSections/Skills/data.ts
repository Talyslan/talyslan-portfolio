export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        key: 'languages',
        color: 'from-cyan-500 to-teal-500',
        skills: [
            { name: 'TypeScript', level: 'advanced' },
            { name: 'JavaScript', level: 'advanced' },
            { name: 'Python', level: 'proficient' },
            { name: 'SQL', level: 'proficient' },
            { name: 'Java', level: 'familiar' },
            { name: 'PHP', level: 'familiar' },
        ],
    },
    {
        key: 'frontend',
        color: 'from-violet-500 to-purple-500',
        skills: [
            { name: 'React', level: 'advanced' },
            { name: 'Next.js', level: 'advanced' },
            { name: 'Vite', level: 'advanced' },
            { name: 'Tailwind CSS', level: 'advanced' },
            { name: 'HTML5 & CSS3', level: 'advanced' },
            { name: 'Astro', level: 'proficient' },
            { name: 'Angular', level: 'working' },
            { name: 'Vue.js', level: 'familiar' },
        ],
    },
    {
        key: 'backend',
        color: 'from-orange-500 to-amber-500',
        skills: [
            { name: 'Node.js', level: 'proficient' },
            { name: 'REST APIs', level: 'advanced' },
            { name: 'Express.js', level: 'proficient' },
            { name: 'PostgreSQL', level: 'working' },
            { name: 'Firebase', level: 'working' },
            {
                name: 'Authentication & Authorization',
                level: 'working',
            },
            { name: 'Jest(E2E)', level: 'working' },
            { name: 'Vitest (E2E)', level: 'working' },
            { name: 'Nest js', level: 'working' },
        ],
    },
    {
        key: 'foundations',
        color: 'from-emerald-500 to-green-500',
        skills: [
            { name: 'Object-Oriented Programming (OOP)', level: 'advanced' },
            { name: 'Relational Database Modeling', level: 'proficient' },
            { name: 'Software Architecture Basics', level: 'proficient' },
            { name: 'Design Patterns (basic)', level: 'working' },
            { name: 'Clean Code Principles', level: 'proficient' },
            { name: 'Agile / Scrum', level: 'working' },
        ],
    },
    {
        key: 'devops',
        color: 'from-rose-500 to-pink-500',
        skills: [
            { name: 'Git & GitHub', level: 'advanced' },
            { name: 'Docker', level: 'proficient' },
            { name: 'CI/CD Pipelines', level: 'proficient' },
            { name: 'Linux (CLI)', level: 'working' },
            { name: 'Server & Network Basics', level: 'working' },
        ],
    },
    {
        key: 'design',
        color: 'from-sky-500 to-blue-500',
        skills: [
            { name: 'Figma', level: 'proficient' },
            { name: 'UI/UX Fundamentals', level: 'proficient' },
            { name: 'Accessibility (a11y)', level: 'working' },
            { name: 'Product Thinking', level: 'working' },
        ],
    },
];

export const TECH_STACK: TechStackItem[] = [
    { name: 'TypeScript', abbr: 'TS' },
    { name: 'React', abbr: 'Re' },
    { name: 'Next.js', abbr: 'Nx' },
    { name: 'Vite', abbr: 'Vi' },
    { name: 'Tailwind CSS', abbr: 'Tw' },
    { name: 'Node.js', abbr: 'Nd' },
    { name: 'PostgreSQL', abbr: 'Pg' },
    { name: 'Git', abbr: 'Gt' },
];

export const LEVEL_WIDTH: Record<SkillLevel, number> = {
    advanced: 95,
    proficient: 75,
    working: 50,
    familiar: 25,
};
