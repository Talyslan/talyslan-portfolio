const RATE_LIMIT_WINDOW = 60_000; // 1 min
const RATE_LIMIT_MAX = 5;

const rateLimitMap = new Map<string, number[]>();

export function isRateLimited(ip: string) {
    const now = Date.now();
    const requests = rateLimitMap.get(ip) || [];

    const recent = requests.filter(
        (timestamp) => now - timestamp < RATE_LIMIT_WINDOW,
    );

    recent.push(now);
    rateLimitMap.set(ip, recent);

    return recent.length > RATE_LIMIT_MAX;
}
