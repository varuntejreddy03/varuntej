// Screenshot + fallback-cover helpers for website previews.
import type { Industry } from '@/lib/shipped';

// WordPress mShots renders and caches a screenshot of any public URL — no API key needed.
export function screenshotUrl(url: string, width = 800) {
  const height = Math.round(width * 0.625);
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}&vpw=1280&vph=800`;
}

export function displayHost(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/\/$/, '');
}

export function initials(name: string) {
  const words = name.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[1][0]).toUpperCase();
}

// Soft tint + deep ink per industry, used for fallback covers and industry dots.
export const industryTone: Record<Industry, { bg: string; ink: string }> = {
  'Food & Hospitality': { bg: '#FCE9DC', ink: '#9A3B12' },
  'Interiors & Architecture': { bg: '#F0E6D8', ink: '#6B4A2B' },
  Technology: { bg: '#E3E8FF', ink: '#2439C9' },
  'Health & Wellness': { bg: '#DDF3E8', ink: '#146347' },
  'Logistics & Trade': { bg: '#E0EDF6', ink: '#1D4E6E' },
  'Travel & Events': { bg: '#FFF0C7', ink: '#8A5A00' },
  'Professional Services': { bg: '#ECE8F8', ink: '#4B3A8F' },
  'Marketing & Media': { bg: '#FBE2EE', ink: '#9C2458' },
  'Build, Home & Retail': { bg: '#E8EFDD', ink: '#46602A' },
  'Education & Careers': { bg: '#DDF1F4', ink: '#1B6470' },
};
