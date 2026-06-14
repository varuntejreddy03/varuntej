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
  } catch {
    // Return fallback data when GitHub API fails
    return NextResponse.json({
      totalRepos: 15,
      totalStars: 5,
      totalCommitsLastYear: 200,
      topLanguages: [
        { language: 'TypeScript', count: 8 },
        { language: 'JavaScript', count: 5 },
        { language: 'Python', count: 4 },
        { language: 'HTML', count: 3 },
        { language: 'CSS', count: 2 },
      ],
      updatedAt: new Date().toISOString(),
    });
  }
}
