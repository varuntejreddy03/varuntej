// Shared formatting and request helpers keep API routes and widgets consistent.
import { createHash } from 'crypto';

export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ');
}

export function getIpFromHeaders(headers: Headers) {
  const forwarded = headers.get('x-forwarded-for');
  const real = headers.get('x-real-ip');
  return forwarded?.split(',')[0]?.trim() || real || '127.0.0.1';
}

export function hashValue(value: string) {
  return createHash('sha256').update(value).digest('hex').slice(0, 16);
}

export function getWeekKey(date = new Date()) {
  const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = utcDate.getUTCDay() || 7;
  utcDate.setUTCDate(utcDate.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(utcDate.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil((((utcDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${utcDate.getUTCFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
}

export function formatTimeAgo(dateInput: string | number | Date) {
  const date = new Date(dateInput);
  const diff = Date.now() - date.getTime();
  const units = [
    { label: 'day', ms: 86_400_000 },
    { label: 'hour', ms: 3_600_000 },
    { label: 'minute', ms: 60_000 },
  ];

  for (const unit of units) {
    const value = Math.floor(diff / unit.ms);
    if (value >= 1) {
      return `${value} ${unit.label}${value > 1 ? 's' : ''} ago`;
    }
  }

  return 'just now';
}

export function formatTimestamp(date = new Date()) {
  return new Intl.DateTimeFormat('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Calcutta',
  }).format(date);
}

export function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}
