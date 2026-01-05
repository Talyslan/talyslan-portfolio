import { env } from '@/env';

export async function fetchGithubRepo(
    username: string,
    repo: string,
): Promise<GithubRepo> {
    const res = await fetch(
        `https://api.github.com/repos/${username}/${repo}`,
        {
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${env.VITE_GITHUB_TOKEN}`,
            },
        },
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch repo: ${repo}`);
    }

    return res.json();
}
