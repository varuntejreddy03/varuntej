// GitHub stats route returns cached repository, star, commit, and language data for the live widget.
import { NextResponse } from 'next/server';
import { owner } from '@/lib/content';
import { getGithubStats } from '@/lib/github';

export const runtime = 'nodejs';
export const revalidate = 3600;

export async function GET() {
  try {
    const stats = await getGithubStats(owner.githubUsername);
    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 's-maxage=3600, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: error instanceof Error ? error.message : 'Unable to fetch GitHub stats.',
      },
      { status: 500 },
    );
  }
}
