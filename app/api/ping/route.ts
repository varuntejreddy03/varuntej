// Ping route records weekly visits and exposes the subtle hero visitor counter.
import { NextResponse } from 'next/server';
import { getWeeklyVisitCount, trackWeeklyVisit } from '@/lib/storage';
import { getIpFromHeaders } from '@/lib/utils';

export const runtime = 'nodejs';

export async function GET() {
  const weeklyVisitors = await getWeeklyVisitCount();
  return NextResponse.json({ weeklyVisitors });
}

export async function POST(request: Request) {
  const ip = getIpFromHeaders(request.headers);
  const weeklyVisitors = await trackWeeklyVisit(ip);
  return NextResponse.json({ weeklyVisitors });
}
