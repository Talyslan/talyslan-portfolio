export {};

declare global {
    type Lang = 'pt-BR' | 'en';

    type SkillLevel = 'advanced' | 'proficient' | 'working' | 'familiar';

    type Skill = {
        name: string;
        level: SkillLevel;
    };

    type SkillCategory = {
        key: string;
        color: string;
        skills: Skill[];
    };

    type TechStackItem = {
        name: string;
        abbr: string;
    };

    interface Project {
        title: string;
        description: string;
        tech: string[];
        github: string;
        live: string;
        image: string;
    }

    interface GithubRepo {
        name: string;
        description: string | null;
        html_url: string;
        homepage: string | null;
        topics: string[];
        language: string | null;
    }

    interface FeaturedProject {
        live: string;
        image: string;
    }
}
