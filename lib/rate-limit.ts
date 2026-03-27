// Contact form rate limiting uses Upstash when available and falls back to an in-memory window.
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const memoryWindow = new Map<string, number[]>();

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(3, '1 h'),
      prefix: 'portfolio-contact',
    })
  : null;

export async function limitContactByIp(ip: string) {
  if (ratelimit) {
    return ratelimit.limit(ip);
  }

  const now = Date.now();
  const windowStart = now - 60 * 60 * 1000;
  const entries = (memoryWindow.get(ip) ?? []).filter((timestamp) => timestamp > windowStart);

  if (entries.length >= 3) {
    memoryWindow.set(ip, entries);
    return { success: false, remaining: 0 };
  }

  entries.push(now);
  memoryWindow.set(ip, entries);
  return { success: true, remaining: Math.max(0, 3 - entries.length) };
}
