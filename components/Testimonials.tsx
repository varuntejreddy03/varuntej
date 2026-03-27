'use client';

// Testimonials presents placeholder client quotes in terminal-output styled cards.
import { testimonials } from '@/lib/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="border-t border-white/5 px-4 py-14 sm:px-0 lg:py-24">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 text-[10px] font-black uppercase tracking-[0.42em] text-primary">Testimonials</p>
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Terminal logs from future client shout-outs.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="terminal-panel rounded-[2rem] p-6">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-emerald-300">
                $ client.echo --placeholder
              </p>
              <p className="text-sm leading-7 text-slate-200">&quot;{item.quote}&quot;</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="text-[10px] font-black uppercase tracking-[0.24em] text-slate-400">{item.author}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
