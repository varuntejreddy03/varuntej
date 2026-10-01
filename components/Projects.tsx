'use client';

// Case studies: one featured platform (Palavu Centre) and two supporting products, each with a drawn UI preview.
import Icon from '@/components/Icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <li key={tag} className="inline-flex h-[30px] items-center rounded-full border border-line px-3 text-[13px] text-ink-soft">
          {tag}
        </li>
      ))}
    </ul>
  );
}

function BrowserChrome({ label }: { label: string }) {
  return (
    <div className="flex h-[30px] items-center gap-1.5 border-b border-black/5 bg-muted px-3">
      <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
      <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
      <span className="h-2 w-2 rounded-full bg-[#28C840]" />
      <span className="ml-2.5 flex h-[18px] flex-1 items-center justify-center rounded-md bg-white text-[10px] text-[#6B685F]">{label}</span>
    </div>
  );
}

const orderRows = [
  { status: 'New', tone: 'bg-accent-soft text-[#2439C9]', bars: ['w-[110px]', 'w-[70px]'] },
  { status: 'Preparing', tone: 'bg-[#FFF0C7] text-[#8A5A00]', bars: ['w-[90px]', 'w-[60px]'] },
  { status: 'Ready', tone: 'bg-[#E3F5EA] text-[#146347]', bars: ['w-[120px]', 'w-[80px]'] },
  { status: 'Delivered', tone: 'bg-muted text-muted-foreground', bars: ['w-[100px]', 'w-[64px]'] },
];

function AdminMock() {
  return (
    <div className="w-full overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_24px_48px_-24px_rgba(154,59,18,0.35)]">
      <BrowserChrome label="admin · Palavu Centre" />
      <div className="flex">
        <div className="hidden w-[120px] shrink-0 flex-col gap-1.5 border-r border-[#EFEBE3] bg-[#FAF7F2] px-3 py-[18px] text-xs text-muted-foreground sm:flex">
          <span className="flex h-[30px] items-center rounded-lg bg-[#FCE9DC] px-2.5 font-semibold text-[#9A3B12]">Orders</span>
          <span className="flex h-[30px] items-center px-2.5">Menu</span>
          <span className="flex h-[30px] items-center px-2.5">Payments</span>
          <span className="flex h-[30px] items-center px-2.5">Settings</span>
        </div>
        <div className="flex flex-1 flex-col gap-2.5 px-4 py-4 sm:px-5 sm:py-[18px]">
          <div className="flex items-center justify-between">
            <span className="font-heading text-base font-semibold sm:text-lg">Orders</span>
            <span className="inline-flex h-6 items-center gap-1.5 rounded-full bg-[#E3F5EA] px-2.5 text-[11px] font-semibold text-[#146347]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1A9E5A]" />
              Live
            </span>
          </div>
          {orderRows.map((row, index) => (
            <div
              key={row.status}
              className={`flex h-12 items-center gap-3 rounded-[10px] border border-[#EFEBE3] px-3 sm:h-[58px] ${index > 1 ? 'hidden sm:flex' : ''}`}
            >
              <span className="hidden h-[30px] w-[30px] rounded-full bg-muted sm:block" />
              <span className="flex flex-1 flex-col gap-1.5">
                <span className={`h-2 rounded bg-line ${row.bars[0]}`} />
                <span className={`h-1.5 rounded bg-[#EFEBE3] ${row.bars[1]}`} />
              </span>
              <span className={`inline-flex h-6 items-center rounded-full px-2.5 text-[11px] font-semibold ${row.tone}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const bars = ['h-[40%]', 'h-[65%]', 'h-[50%]', 'h-[85%]', 'h-[60%]', 'h-[75%]'];

  return (
    <section id="work" className="py-[72px] lg:py-[100px]">
      <div ref={ref} className={`mx-auto max-w-[1200px] px-5 sm:px-8 section-fade ${isVisible ? 'is-visible' : ''}`}>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary lg:text-[13px]">Case studies</p>
            <h2 className="mt-3 font-heading text-[36px] font-semibold leading-[1.05] tracking-[-0.035em] lg:mt-4 lg:text-[56px] lg:leading-[1.04]">
              Software that runs <span className="font-serif font-normal italic tracking-[-0.01em]">real businesses.</span>
            </h2>
          </div>
          <p className="text-base leading-[1.6] text-muted-foreground lg:text-[17px]">
            Beyond the websites: platforms that take orders, collect reports and answer questions behind the scenes.
          </p>
        </div>

        <article className="mt-8 grid overflow-hidden rounded-3xl border border-line bg-surface lg:mt-14 lg:grid-cols-2 lg:rounded-[28px]">
          <div className="order-2 flex flex-col p-6 sm:p-10 lg:order-1 lg:p-14">
            <p className="text-[13px] font-semibold text-primary lg:text-sm">Full stack platform · Restaurant</p>
            <h3 className="mt-2 font-heading text-[26px] font-semibold leading-[1.1] tracking-[-0.03em] lg:mt-3.5 lg:text-[42px] lg:leading-[1.05]">
              RajaMahendravaram Palavu Centre
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground lg:mt-5 lg:text-[17px]">
              A customer ordering site, an admin dashboard and an Express API for a Godavari cuisine restaurant in
              Hyderabad. Orders arrive in the admin live, and payments are verified through Razorpay.
            </p>
            <div className="mt-5 lg:mt-6">
              <Tags items={['React', 'Express', 'Prisma + Postgres', 'Socket.IO', 'Razorpay']} />
            </div>
            <a
              href="https://rjmpalavucentre.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-primary lg:mt-auto lg:pt-8"
            >
              Visit rjmpalavucentre.com
              <Icon name="arrow-up-right" className="h-4 w-4" />
            </a>
          </div>
          <div className="order-1 flex items-center bg-[#FCE9DC] p-5 sm:p-12 lg:order-2">
            <AdminMock />
          </div>
        </article>

        <div className="mt-4 grid gap-4 lg:mt-6 lg:grid-cols-2 lg:gap-6">
          <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface lg:rounded-[28px]">
            <div className="flex h-[220px] items-center justify-center bg-[#EDEAE3] px-5 lg:h-[260px]">
              <div className="flex w-full max-w-[380px] flex-col gap-3 rounded-2xl bg-white px-5 py-5 shadow-[0_20px_40px_-20px_rgba(21,20,15,0.25)] sm:px-[22px]">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-base font-semibold">Daily sales &amp; stock</span>
                  <span className="h-2 w-[70px] rounded bg-line" />
                </div>
                <div className="flex h-[72px] items-end gap-2.5 border-b border-[#EFEBE3] px-1">
                  {bars.map((height, index) => (
                    <span key={index} className={`flex-1 rounded-t ${height} ${index === 3 ? 'bg-primary' : 'bg-[#D9DEFF]'}`} />
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex h-[30px] items-center rounded-lg border border-line px-3 text-xs font-semibold">Export PDF</span>
                  <span className="inline-flex h-[30px] items-center rounded-lg border border-line px-3 text-xs font-semibold">Export Excel</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:px-10 sm:py-9">
              <p className="text-[13px] font-semibold text-primary lg:text-sm">Business software · Retail</p>
              <h3 className="mt-2 font-heading text-[26px] font-semibold tracking-[-0.03em] lg:mt-2.5 lg:text-[34px]">OptiFirst POS</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground lg:mt-3.5 lg:text-base">
                Replaced paper daily sales and stock forms. Staff submit reports from their phones; admins see dashboards
                and export to PDF or Excel, with Google Sheets as the database.
              </p>
              <div className="mt-5 lg:mt-auto lg:pt-6">
                <Tags items={['React', 'TypeScript', 'Apps Script', 'PDF + Excel exports']} />
              </div>
            </div>
          </article>

          <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-surface lg:rounded-[28px]">
            <div className="flex h-[220px] flex-col justify-center gap-3 bg-night px-6 sm:px-10 lg:h-[260px]">
              <p className="max-w-[300px] self-end rounded-[16px_16px_4px_16px] bg-primary px-4 py-3 text-[13px] leading-[1.5] text-white">
                What does this guideline recommend for first-line treatment?
              </p>
              <div className="flex w-full max-w-[340px] flex-col gap-2 self-start rounded-[16px_16px_16px_4px] bg-[#262622] px-4 py-3.5">
                <span className="h-[7px] w-full rounded bg-white/20" />
                <span className="h-[7px] w-[88%] rounded bg-white/20" />
                <span className="h-[7px] w-[64%] rounded bg-white/20" />
                <span className="mt-1 inline-flex h-[22px] items-center self-start rounded-full bg-white/10 px-2.5 text-[11px] font-semibold text-white/80">
                  Sources cited
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 sm:px-10 sm:py-9">
              <p className="text-[13px] font-semibold text-primary lg:text-sm">AI system · Healthcare</p>
              <h3 className="mt-2 font-heading text-[26px] font-semibold tracking-[-0.03em] lg:mt-2.5 lg:text-[34px]">MedRAG</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground lg:mt-3.5 lg:text-base">
                Medical question answering grounded in a 4.4GB FAISS index, with answers in 2–3 seconds. FastAPI with JWT
                and role-based access, deployed with Docker on AWS.
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 lg:mt-auto lg:pt-6">
                <Tags items={['FastAPI', 'FAISS', 'AWS']} />
                <a
                  href="https://medrag.site"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-ink hover:text-primary"
                >
                  medrag.site
                  <Icon name="arrow-up-right" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
