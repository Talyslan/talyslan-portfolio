export async function fetchGithubRepo(
    username: string,
    repo: string,
): Promise<GithubRepo> {
    const res = await fetch(`https://api.github.com/repos/${username}/${repo}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch repo: ${repo}`);
    }

    return res.json();
}
