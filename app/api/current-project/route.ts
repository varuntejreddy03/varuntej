// Current project route exposes the live focus card and latest commit metadata for MedRAG v2.
import { NextResponse } from 'next/server';
import { liveProjectConfig, owner } from '@/lib/content';
import { getLatestRepoCommit } from '@/lib/github';

export const runtime = 'nodejs';
export const revalidate = 300;

export async function GET() {
  try {
    const lastCommit = await getLatestRepoCommit(owner.githubUsername, liveProjectConfig.repository);
    return NextResponse.json({
      project: liveProjectConfig.name,
      status: liveProjectConfig.status,
      lastCommit,
    });
  } catch {
    return NextResponse.json({
      project: liveProjectConfig.name,
      status: liveProjectConfig.status,
      lastCommit: null,
    });
  }
}
