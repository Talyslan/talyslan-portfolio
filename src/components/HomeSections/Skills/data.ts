export const SKILL_CATEGORIES: SkillCategory[] = [
    {
        name: 'Programming Languages',
        color: 'from-cyan-500 to-teal-500',
        skills: [
            { name: 'TypeScript', level: 'Advanced' },
            { name: 'JavaScript', level: 'Advanced' },
            { name: 'Python', level: 'Proficient' },
            { name: 'SQL', level: 'Proficient' },
            { name: 'Java', level: 'Familiar' },
            { name: 'PHP', level: 'Familiar' },
        ],
    },
    {
        name: 'Frontend Architecture & UI Engineering',
        color: 'from-violet-500 to-purple-500',
        skills: [
            { name: 'React', level: 'Advanced' },
            { name: 'Next.js', level: 'Advanced' },
            { name: 'Vite', level: 'Advanced' },
            { name: 'Tailwind CSS', level: 'Advanced' },
            { name: 'HTML5 & CSS3', level: 'Advanced' },
            { name: 'Astro', level: 'Proficient' },
            { name: 'Angular', level: 'Working Knowledge' },
            { name: 'Vue.js', level: 'Familiar' },
        ],
    },
    {
        name: 'Backend Systems & APIs',
        color: 'from-orange-500 to-amber-500',
        skills: [
            { name: 'Node.js', level: 'Proficient' },
            { name: 'REST APIs', level: 'Advanced' },
            { name: 'Express.js', level: 'Proficient' },
            { name: 'PostgreSQL', level: 'Working Knowledge' },
            { name: 'Firebase', level: 'Working Knowledge' },
            {
                name: 'Authentication & Authorization',
                level: 'Working Knowledge',
            },
        ],
    },
    {
        name: 'Engineering Foundations',
        color: 'from-emerald-500 to-green-500',
        skills: [
            { name: 'Object-Oriented Programming (OOP)', level: 'Advanced' },
            { name: 'Relational Database Modeling', level: 'Proficient' },
            { name: 'Software Architecture Basics', level: 'Proficient' },
            { name: 'Design Patterns (basic)', level: 'Working Knowledge' },
            { name: 'Clean Code Principles', level: 'Proficient' },
            { name: 'Agile / Scrum', level: 'Working Knowledge' },
        ],
    },
    {
        name: 'DevOps, Infra & Engineering Tooling',
        color: 'from-rose-500 to-pink-500',
        skills: [
            { name: 'Git & GitHub', level: 'Advanced' },
            { name: 'Docker', level: 'Proficient' },
            { name: 'CI/CD Pipelines', level: 'Proficient' },
            { name: 'Linux (CLI)', level: 'Working Knowledge' },
            { name: 'Server & Network Basics', level: 'Working Knowledge' },
        ],
    },
    {
        name: 'Testing, Quality & Reliability',
        color: 'from-indigo-500 to-blue-500',
        skills: [
            { name: 'Unit Testing (Jest)', level: 'Working Knowledge' },
            { name: 'Integration Testing', level: 'Working Knowledge' },
            { name: 'Code Review Practices', level: 'Proficient' },
            { name: 'Debugging & Troubleshooting', level: 'Advanced' },
        ],
    },
    {
        name: 'Design, UX & Product Tools',
        color: 'from-sky-500 to-blue-500',
        skills: [
            { name: 'Figma', level: 'Proficient' },
            { name: 'UI/UX Fundamentals', level: 'Proficient' },
            { name: 'Accessibility (a11y)', level: 'Working Knowledge' },
            { name: 'Product Thinking', level: 'Working Knowledge' },
        ],
    },
    {
        name: 'Research, Teaching & Communication',
        color: 'from-fuchsia-500 to-pink-500',
        skills: [
            { name: 'Applied Research (PIBIT / PIBIC)', level: 'Proficient' },
            { name: 'Technical Writing', level: 'Proficient' },
            { name: 'Teaching & Mentoring', level: 'Working Knowledge' },
            { name: 'Team Communication', level: 'Advanced' },
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
    Advanced: 95,
    Proficient: 75,
    'Working Knowledge': 50,
    Familiar: 25,
};

export const LEVEL_DESCRIPTION: Record<SkillLevel, string> = {
    Advanced:
        'Used daily in production. Comfortable making architectural and design decisions.',
    Proficient:
        'Used regularly in real projects. Confident implementing features and solving issues.',
    'Working Knowledge':
        'Hands-on experience in real projects, but not part of my core stack.',
    Familiar:
        'Explored and used experimentally. Basic understanding of concepts and tooling.',
};
