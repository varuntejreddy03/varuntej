// GitHub helpers power the live stats widget and current-project commit status API.
import { formatTimeAgo } from '@/lib/utils';

type Repo = {
  stargazers_count: number;
  language: string | null;
};

async function githubFetch<T>(url: string, init?: RequestInit) {
  const headers = new Headers(init?.headers);
  headers.set('Accept', 'application/vnd.github+json');

  if (process.env.GITHUB_TOKEN) {
    headers.set('Authorization', `Bearer ${process.env.GITHUB_TOKEN}`);
  }

  const response = await fetch(url, {
    ...init,
    headers,
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

async function getAllRepos(username: string) {
  const repos: Repo[] = [];
  let page = 1;

  while (true) {
    const pageData = await githubFetch<Repo[]>(
      `https://api.github.com/users/${username}/repos?per_page=100&type=owner&sort=updated&page=${page}`,
    );
    repos.push(...pageData);

    if (pageData.length < 100) {
      break;
    }

    page += 1;
  }

  return repos;
}

export async function getGithubStats(username: string) {
  const repos = await getAllRepos(username);
  const totalRepos = repos.length;
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  const languageCounts = repos.reduce<Record<string, number>>((acc, repo) => {
    if (!repo.language) {
      return acc;
    }

    acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});

  const topLanguages = Object.entries(languageCounts)
    .sort(([, left], [, right]) => right - left)
    .slice(0, 5)
    .map(([language, count]) => ({ language, count }));

  const since = new Date();
  since.setUTCFullYear(since.getUTCFullYear() - 1);
  const sinceDate = since.toISOString().slice(0, 10);

  let totalCommitsLastYear = 0;

  try {
    const commitSearch = await githubFetch<{ total_count: number }>(
      `https://api.github.com/search/commits?q=author:${username}+author-date:>=${sinceDate}&per_page=1`,
    );
    totalCommitsLastYear = Math.min(commitSearch.total_count, 1000);
  } catch {
    totalCommitsLastYear = 0;
  }

  return {
    totalRepos,
    totalStars,
    totalCommitsLastYear,
    topLanguages,
    updatedAt: new Date().toISOString(),
  };
}

export async function getLatestRepoCommit(username: string, repository: string) {
  const commits = await githubFetch<
    Array<{
      commit: {
        message: string;
        author: {
          date: string;
        };
      };
      html_url: string;
      sha: string;
    }>
  >(`https://api.github.com/repos/${username}/${repository}/commits?per_page=1`);

  const latest = commits[0];

  if (!latest) {
    return null;
  }

  return {
    message: latest.commit.message.split('\n')[0],
    committedAt: latest.commit.author.date,
    relativeTime: formatTimeAgo(latest.commit.author.date),
    url: latest.html_url,
    sha: latest.sha.slice(0, 7),
  };
}
