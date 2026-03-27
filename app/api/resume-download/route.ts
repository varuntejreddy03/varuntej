// Resume download route logs resume events and exposes the public download counter badge.
import { NextResponse } from 'next/server';
import { getResumeDownloadCount, trackResumeDownload } from '@/lib/storage';
import { getIpFromHeaders } from '@/lib/utils';

export const runtime = 'nodejs';

export async function GET() {
  const count = await getResumeDownloadCount();
  return NextResponse.json({ count });
}

export async function POST(request: Request) {
  const ip = getIpFromHeaders(request.headers);
  const count = await trackResumeDownload({
    ip,
    userAgent: request.headers.get('user-agent'),
    referrer: request.headers.get('referer'),
  });

  return NextResponse.json({ count });
}
