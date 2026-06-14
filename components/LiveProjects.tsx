import React from 'react';

const LiveProjects: React.FC = () => {
  const domains = [
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
    { name: 'Sandeep Design', url: 'https://www.sandeepdesignassociates.in', category: 'Architecture' },
    { name: '999 Tatva Media', url: 'https://999tatvamedia.com', category: 'Media' },
    { name: 'Cineo Hub', url: 'https://cineohub.com', category: 'Entertainment' },
    { name: 'Infinite Metric', url: 'https://infinitemetriclogistics.co.uk', category: 'Logistics' },
    { name: 'Market Titans', url: 'https://themarkettitans.com', category: 'Finance' },
    { name: 'Brent Street Pizza', url: 'https://brentstreetpizza.com.au', category: 'Food' },
  ];

  return (
    <section id="live-projects" className="py-20">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-4">
          20+ Live Websites
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Shipped & Running in Production
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Real businesses. Real traffic. These are production websites I developed during my internship — each one live and serving customers today.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {domains.map((domain, i) => (
          <a
            key={i}
            href={domain.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full">
                {domain.category}
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400"></span>
            </div>
            <h4 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1.5">
              {domain.name}
            </h4>
            <div className="flex items-center gap-1.5">
              <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-xs text-gray-400 group-hover:text-blue-400 transition-colors truncate">
                {domain.url.replace('https://', '').replace('www.', '')}
              </span>
            </div>
            <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <p className="text-sm text-gray-400">
          All websites designed, developed, and deployed independently.
        </p>
      </div>
    </section>
  );
};

export default LiveProjects;