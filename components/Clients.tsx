'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const liveClients = [
  { name: 'VJS Orbit', url: 'https://vjsorbit.in', category: 'Tech' },
  { name: 'IT Jobs London', url: 'https://itjobslondon.in', category: 'Jobs' },
  { name: 'Joyous Food Factory', url: 'https://joyousfoodfactory.com', category: 'Food' },
  { name: 'RJM Palavu Centre', url: 'https://rjmpalavucentre.com', category: 'Food' },
  { name: 'Epson Inkpad Service', url: 'https://epsoninkpadservice.com', category: 'Service' },
  { name: 'Hilforte', url: 'https://hilforte.com', category: 'Business' },
  { name: 'RK Sports Infra', url: 'https://rksportsinfra.com', category: 'Sports' },
  { name: 'Bear Harbor Exports', url: 'https://bearharborexports.com', category: 'Export' },
  { name: 'Prime Boda UK', url: 'https://primeboda.co.uk', category: 'Transport' },
  { name: 'Logistics Pro UK', url: 'https://logisticspro.uk', category: 'Logistics' },
  { name: 'Jharoka Heritage', url: 'https://jharoka.in', category: 'Furniture' },
  { name: 'Flowreach Solutions', url: 'https://flowreachsolutions.com', category: 'Marketing' },
  { name: 'Love You Chai', url: 'https://loveyouchai.com', category: 'Cafe' },
  { name: 'Sathya Interiors', url: 'https://www.sathyainteriors.com', category: 'Interior' },
  { name: 'Sandeep Design Associates', url: 'https://www.sandeepdesignassociates.in', category: 'Architecture' },
  { name: '999 Tatva Media', url: 'https://999tatvamedia.com', category: 'Media' },
  { name: 'Cineo Hub', url: 'https://cineohub.com', category: 'Entertainment' },
  { name: 'Infinite Metric Logistics', url: 'https://infinitemetriclogistics.co.uk', category: 'Logistics' },
  { name: 'Market Titans', url: 'https://themarkettitans.com', category: 'Finance' },
  { name: 'Brent Street Pizza', url: 'https://brentstreetpizza.com.au', category: 'Food' },
];

function ProductionWebsiteCard({ name, url, category }: { name: string; url: string; category: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col justify-between rounded-2xl border border-gray-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500">
          {category}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
        </span>
      </div>

      {/* Name */}
      <h4 className="text-[15px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
        {name}
      </h4>

      {/* URL */}
      <div className="flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <span className="text-[12px] text-gray-400 group-hover:text-blue-500 transition-colors truncate font-medium">
          {url.replace('https://', '').replace('www.', '')}
        </span>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}

export default function Clients() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clients" className="py-20 lg:py-28">
      <div ref={ref} className={`section-fade ${isVisible ? 'is-visible' : ''}`}>
        {/* Section background */}
        <div className="relative rounded-3xl bg-gradient-to-b from-slate-50 via-blue-50/30 to-white border border-gray-100 p-8 sm:p-12 lg:p-16">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">20+ Live Websites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Shipped & Running in Production
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Real businesses. Real traffic. Production websites developed and deployed independently — each one live and serving customers today.
            </p>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {[
              { value: '20+', label: 'Websites Shipped' },
              { value: '100%', label: 'Live in Production' },
              { value: '0', label: 'Critical Bugs' },
              { value: '5+', label: 'Industries Covered' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center rounded-xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5">
                <span className="text-xl sm:text-2xl font-extrabold text-gray-900">{stat.value}</span>
                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {liveClients.map((client) => (
              <ProductionWebsiteCard key={client.name} {...client} />
            ))}
          </div>

          {/* Bottom trust signals */}
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-emerald-500">verified</span>
              <span className="font-semibold text-gray-600">Zero Downtime Launches</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-blue-500">schedule</span>
              <span className="font-semibold text-gray-600">100% On-Time Delivery</span>
            </div>
            <span className="hidden sm:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
              <span className="font-semibold text-gray-600">Repeat Client Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
