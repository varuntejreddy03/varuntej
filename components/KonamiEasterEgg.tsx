'use client';

// KonamiEasterEgg — fun easter egg with clean light styling.
import { useEffect, useState } from 'react';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

export default function KonamiEasterEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let pointer = 0;

    async function onKeyDown(event: KeyboardEvent) {
      const normalized = event.key.length === 1 ? event.key.toLowerCase() : event.key;

      if (normalized === KONAMI[pointer]) {
        pointer += 1;

        if (pointer === KONAMI.length) {
          pointer = 0;
          setActive(true);

          const confetti = (await import('canvas-confetti')).default;
          confetti({
            particleCount: 180,
            spread: 80,
            origin: { y: 0.65 },
          });

          window.setTimeout(() => setActive(false), 3200);
        }
      } else {
        pointer = normalized === KONAMI[0] ? 1 : 0;
      }
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  if (!active) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[120] flex items-end justify-center p-6">
      <div className="w-full max-w-2xl rounded-2xl border border-primary/20 bg-white px-6 py-5 shadow-card-lg">
        <p className="text-sm font-bold text-primary">
          🎉 You found the easter egg! Hire Varun — he ships clean.
        </p>
      </div>
    </div>
  );
}
