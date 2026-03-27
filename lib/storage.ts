// Redis-backed counters fall back to a local JSON store so analytics still work without cloud keys.
import { mkdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import { Redis } from '@upstash/redis';
import { getWeekKey, hashValue } from '@/lib/utils';

type VisitorRecord = {
  ipHash: string;
  timestamp: string;
};

type ResumeRecord = {
  ipHash: string;
  timestamp: string;
  userAgent: string;
  referrer: string;
};

type StoreShape = {
  visitors: Record<string, VisitorRecord[]>;
  resumeDownloads: ResumeRecord[];
};

const dataDir = path.join(process.cwd(), '.data');
const dataFile = path.join(dataDir, 'portfolio-store.json');

const redis =
  process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

async function ensureStore() {
  await mkdir(dataDir, { recursive: true });

  try {
    const existing = await readFile(dataFile, 'utf8');
    return JSON.parse(existing) as StoreShape;
  } catch {
    const initial: StoreShape = {
      visitors: {},
      resumeDownloads: [],
    };
    await writeFile(dataFile, JSON.stringify(initial, null, 2), 'utf8');
    return initial;
  }
}

async function saveStore(store: StoreShape) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(dataFile, JSON.stringify(store, null, 2), 'utf8');
}

export async function trackWeeklyVisit(ip: string) {
  const weekKey = getWeekKey();
  const ipHash = hashValue(ip);

  if (redis) {
    const visitorKey = `portfolio:visitors:${weekKey}:${ipHash}`;
    const countKey = `portfolio:visitors:${weekKey}:count`;
    const setResult = await redis.set(visitorKey, '1', { ex: 60 * 60 * 24 * 8, nx: true });

    if (setResult === 'OK') {
      await redis.incr(countKey);
      await redis.expire(countKey, 60 * 60 * 24 * 8);
    }

    const count = (await redis.get<number>(countKey)) ?? 0;
    return count;
  }

  const store = await ensureStore();
  const entries = store.visitors[weekKey] ?? [];
  if (!entries.some((entry) => entry.ipHash === ipHash)) {
    entries.push({ ipHash, timestamp: new Date().toISOString() });
    store.visitors[weekKey] = entries;
    await saveStore(store);
  }

  return store.visitors[weekKey].length;
}

export async function getWeeklyVisitCount() {
  const weekKey = getWeekKey();

  if (redis) {
    return (await redis.get<number>(`portfolio:visitors:${weekKey}:count`)) ?? 0;
  }

  const store = await ensureStore();
  return store.visitors[weekKey]?.length ?? 0;
}

export async function trackResumeDownload(input: {
  ip: string;
  userAgent?: string | null;
  referrer?: string | null;
}) {
  const event = {
    ipHash: hashValue(input.ip),
    timestamp: new Date().toISOString(),
    userAgent: input.userAgent ?? 'unknown',
    referrer: input.referrer ?? 'direct',
  };

  if (redis) {
    await redis.rpush('portfolio:resume:events', event);
    await redis.incr('portfolio:resume:count');
    const count = (await redis.get<number>('portfolio:resume:count')) ?? 0;
    return count;
  }

  const store = await ensureStore();
  store.resumeDownloads.push(event);
  await saveStore(store);
  return store.resumeDownloads.length;
}

export async function getResumeDownloadCount() {
  if (redis) {
    return (await redis.get<number>('portfolio:resume:count')) ?? 0;
  }

  const store = await ensureStore();
  return store.resumeDownloads.length;
}
