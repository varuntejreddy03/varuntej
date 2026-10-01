// Every client website shipped to production. Add new launches here — the Shipped
// section, hero counters, and industry filters all derive from this list.
export const industries = [
  'Food & Hospitality',
  'Interiors & Architecture',
  'Technology',
  'Health & Wellness',
  'Logistics & Trade',
  'Travel & Events',
  'Professional Services',
  'Marketing & Media',
  'Build, Home & Retail',
  'Education & Careers',
] as const;

export type Industry = (typeof industries)[number];

export type ShippedSite = {
  name: string;
  industry: Industry;
  summary: string;
  location?: string;
  url?: string;
  // Optional local screenshot in /public (e.g. '/shots/navvam.jpg'); used instead of the live capture.
  image?: string;
};

export const shippedSites: ShippedSite[] = [
  { name: 'Navvam Spices', industry: 'Food & Hospitality', summary: 'Spice & masala manufacturer', location: 'Medak, Telangana', url: 'https://navvamspices.com' },
  { name: 'Aditya Packers and Movers', industry: 'Logistics & Trade', summary: 'Packing, moving & relocation', location: 'Rajahmundry' },
  { name: 'Santosh Global HSE Academy', industry: 'Education & Careers', summary: 'Health, safety & environment training' },
  { name: 'Kakinada Car Travels', industry: 'Travel & Events', summary: 'Car rentals & outstation trips', location: 'Kakinada', url: 'https://sriprakashcartravelskakinada.com' },
  { name: 'Sri Thrayi Facility', industry: 'Professional Services', summary: 'Facility management services', location: 'Hyderabad', url: 'https://srithrayifacility.com' },
  { name: 'Novasitara', industry: 'Technology', summary: 'SAP & Vistex consulting, tech staffing', url: 'https://novasitara.com' },
  { name: 'Zionledusa', industry: 'Build, Home & Retail', summary: 'LED lighting storefront with full catalogue', location: 'USA', url: 'https://zionledusa.com' },
  { name: 'Elamus Pharmaceuticals', industry: 'Health & Wellness', summary: 'Pharmaceutical product catalogue' },
  { name: 'KS Projects', industry: 'Build, Home & Retail', summary: 'Epoxy flooring & waterproofing', location: 'Hyderabad' },
  { name: 'Epson Inkpad Service', industry: 'Professional Services', summary: 'Printer repair & service across India', url: 'https://epsoninkpadservice.com' },
  { name: 'SAHAYA', industry: 'Health & Wellness', summary: 'Care services platform', url: 'https://sahaya.care' },
  { name: 'Jemima Invisible Grills', industry: 'Build, Home & Retail', summary: 'Invisible grills & safety nets', url: 'https://www.jemimasafetynets.in' },
  { name: 'Dee-Art', industry: 'Interiors & Architecture', summary: 'Modular kitchens & interiors', location: 'Gachibowli, Hyderabad' },
  { name: 'ASRA Vedha', industry: 'Health & Wellness', summary: 'Premium herbal wellness' },
  { name: 'MonkFit', industry: 'Health & Wellness', summary: 'Fat-loss & fitness coaching', location: 'Vizag', url: 'https://monkfit.in' },
  { name: 'Smiley Events', industry: 'Travel & Events', summary: 'Event planning & decor' },
  { name: 'Vizag Tours and Travels', industry: 'Travel & Events', summary: 'Tours & travel packages', location: 'Visakhapatnam' },
  { name: 'Altair Technologies', industry: 'Technology', summary: 'Technology services' },
  { name: 'Infinity Unified Services', industry: 'Professional Services', summary: 'One partner, multiple business solutions' },
  { name: 'Kinetix Performance Studio', industry: 'Health & Wellness', summary: 'Performance training studio' },
  { name: 'Story', industry: 'Build, Home & Retail', summary: 'STORY India brand & products' },
  { name: 'GY Software Solutions', industry: 'Technology', summary: 'Software development' },
  { name: 'TelicomLink', industry: 'Technology', summary: 'Data center & network infrastructure', url: 'https://telicomlink.com' },
  { name: 'Bite Connect', industry: 'Food & Hospitality', summary: 'Cafeteria & catering for schools and offices', url: 'https://biteconnect.in' },
  { name: 'The Market Titans', industry: 'Professional Services', summary: 'Markets & finance brand', url: 'https://themarkettitans.com' },
  { name: 'Drive Shine', industry: 'Professional Services', summary: 'Independent car PDI inspections', location: 'Hyderabad', url: 'https://www.driveshine.co.in' },
  { name: 'Joyous Food Factory', industry: 'Food & Hospitality', summary: 'Artisanal chocolate beedas', url: 'https://joyousfoodfactory.com' },
  { name: '3D Imagines', industry: 'Interiors & Architecture', summary: 'Architectural & industrial scale models', location: 'Hyderabad' },
  { name: 'Onedestiny', industry: 'Travel & Events', summary: 'Event management platform' },
  { name: 'Expert Filings', industry: 'Professional Services', summary: 'Tax compliance & business advisory', url: 'https://expertfilings.in' },
  { name: 'Sathya Interiors', industry: 'Interiors & Architecture', summary: 'Premium interior solutions', url: 'https://www.sathyainteriors.com' },
  { name: 'Intelliforge', industry: 'Technology', summary: 'Technology services' },
  { name: 'Vintage Times', industry: 'Travel & Events', summary: 'Vintage newspaper photobooth', url: 'https://vintagetimes.in' },
  { name: 'Bear Harbor', industry: 'Logistics & Trade', summary: 'Global sourcing & trade facilitation', url: 'https://bearharborexports.com' },
  { name: 'VJS Orbit Abroad Consultancy', industry: 'Education & Careers', summary: 'Study abroad & relocation', url: 'https://vjsorbit.in' },
  { name: 'EarthCore Resources', industry: 'Logistics & Trade', summary: 'Global commodities trading', url: 'https://earthcore.co.in' },
  { name: 'IT Jobs London', industry: 'Education & Careers', summary: 'IT job listings', url: 'https://itjobslondon.in' },
  { name: 'SBG Photography', industry: 'Marketing & Media', summary: 'Photography & videography since 1998' },
  { name: 'Fossilsphere Solutions', industry: 'Professional Services', summary: 'Legal services made simple' },
  { name: 'Rajamahendravaram Palavu Centre', industry: 'Food & Hospitality', summary: 'Godavari cuisine, online ordering + admin', location: 'Hyderabad', url: 'https://rjmpalavucentre.com' },
  { name: 'Brent Street Pizza', industry: 'Food & Hospitality', summary: 'Wood-fired pizzeria', location: 'Tasmania, AU', url: 'https://brentstreetpizza.com.au' },
  { name: 'Cine Hub', industry: 'Marketing & Media', summary: 'Professional reel creation', url: 'https://cineohub.com' },
  { name: 'GR Shipping Services', industry: 'Logistics & Trade', summary: '24x7 ship chandler', location: 'Kakinada' },
  { name: 'Hilforte Elevators', industry: 'Build, Home & Retail', summary: 'Elevators for homes & commercial', url: 'https://hilforte.com' },
  { name: 'Newwave Interiors and Constructions', industry: 'Interiors & Architecture', summary: 'Luxury interiors & construction', location: 'Hyderabad' },
  { name: 'RK Sports Infra', industry: 'Build, Home & Retail', summary: 'Sports infrastructure developer', location: 'Andhra Pradesh', url: 'https://rksportsinfra.com' },
  { name: 'Almacura', industry: 'Health & Wellness', summary: 'Integrative medicine & gynaecology', url: 'https://www.almacura.in' },
  { name: 'Naati Dosa', industry: 'Food & Hospitality', summary: 'South Indian restaurant' },
  { name: '999tatva Media', industry: 'Marketing & Media', summary: 'Digital marketing & creative agency', url: 'https://999tatvamedia.com' },
  { name: 'SABP Technologies LLP', industry: 'Technology', summary: 'Innovative tech solutions', url: 'https://sabptechnologies.com' },
  { name: 'Parall Forensics', industry: 'Professional Services', summary: 'Digital forensics services', url: 'https://parallforensics.com' },
  { name: 'Aikya Spaces', industry: 'Interiors & Architecture', summary: 'Premium interior design', location: 'Bangalore', url: 'https://aikyaspaces.com' },
  { name: 'Prime Boda Services Limited', industry: 'Logistics & Trade', summary: 'Transport services', location: 'United Kingdom', url: 'https://primeboda.co.uk' },
  { name: 'Ayrie Software Solutions', industry: 'Technology', summary: 'Salesforce, AI & data experts', url: 'https://ayriesoft.com' },
  { name: 'Flow Reach', industry: 'Marketing & Media', summary: 'Performance marketing agency', location: 'Hyderabad', url: 'https://flowreachsolutions.com' },
  { name: 'Love You Chai', industry: 'Food & Hospitality', summary: 'Chai café brand', url: 'https://loveyouchai.com' },
  { name: 'Infinite Metric Limited', industry: 'Logistics & Trade', summary: 'Logistics & freight', location: 'United Kingdom', url: 'https://infinitemetriclogistics.co.uk' },
  { name: 'Sandeep Associates', industry: 'Interiors & Architecture', summary: 'Studio of architecture', url: 'https://www.sandeepdesignassociates.in' },
];

export const shippedSoftware = {
  name: 'OptiFirst POS',
  summary:
    'Mobile-first daily sales & stock reporting app that replaced paper forms. Employees submit reports, admins get dashboards plus PDF and Excel exports, with Google Sheets as the backing store.',
  stack: ['React', 'TypeScript', 'Google Apps Script', 'Google Sheets', 'jsPDF', 'Recharts'],
};

export const shippedCountries = ['India', 'United Kingdom', 'United States', 'Australia'] as const;

export const industryCounts = industries
  .map((industry) => ({
    industry,
    count: shippedSites.filter((site) => site.industry === industry).length,
  }))
  .filter((entry) => entry.count > 0)
  .sort((a, b) => b.count - a.count);
