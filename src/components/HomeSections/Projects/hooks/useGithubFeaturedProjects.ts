import { useQuery } from '@tanstack/react-query';
import { fetchGithubRepo } from '@/lib/github';

export function useGithubFeaturedProjects(username: string, repos: string[]) {
    return useQuery<GithubRepo[]>({
        queryKey: ['github-featured-projects', username, repos],
        queryFn: async () => {
            const results = await Promise.all(
                repos.map((repo) => fetchGithubRepo(username, repo)),
            );

            return results;
        },
        staleTime: 1000 * 60 * 10,
        gcTime: 1000 * 60 * 30,
        retry: 1,
    });
}
