import { formatRepoName } from '@/utils/formatRepoName';
import { FEATURED_PROJECTS } from '../data/data';

export class MapperProject {
    static mapRepoToProject(repo: GithubRepo): Project {
        const meta = FEATURED_PROJECTS[repo.name];

        return {
            title: formatRepoName(repo.name),
            description:
                repo.description ?? 'Project description not provided.',
            tech: repo.topics?.length
                ? repo.topics
                : repo.language
                  ? [repo.language]
                  : [],
            github: repo.html_url,

            live: meta?.live,
            image: meta?.image ?? '/projects/placeholder.png',
        };
    }
}
