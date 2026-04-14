'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const segments = [
  { name: 'Film & TV Production', slug: 'film-production', desc: 'Feature films, TV series, commercials, documentaries' },
  { name: 'Live Events', slug: 'live-events', desc: 'Concerts, conferences, sporting events, trade shows' },
  { name: 'Music Venues', slug: 'music-venues', desc: 'Concert halls, clubs, outdoor amphitheaters' },
  { name: 'Theaters & Performing Arts', slug: 'theaters-performing-arts', desc: 'Broadway, regional theater, dance companies' },
  { name: 'Sports Entertainment', slug: 'sports-entertainment', desc: 'Teams, leagues, arenas, athletes' },
  { name: 'Amusement Parks', slug: 'amusement-parks', desc: 'Theme parks, water parks, carnivals, attractions' },
  { name: 'Nightclubs & Bars', slug: 'nightclubs-bars', desc: 'Nightlife venues, DJ events, entertainment bars' },
  { name: 'Streaming & Digital Media', slug: 'streaming-media', desc: 'OTT platforms, podcasts, digital content creators' },
  { name: 'Festivals & Fairs', slug: 'festivals-fairs', desc: 'Music festivals, county fairs, cultural events' },
  { name: 'Talent Agencies', slug: 'talent-agencies', desc: 'Booking agents, managers, casting directors' },
];

export default function WhoWeServe() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="who-we-serve" className="bg-stone" style={{ padding: '7rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Industries Served</p>
          <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Coverage for Every Segment of Entertainment</h2>
          <p className="text-brand" style={{ fontSize: '1rem', lineHeight: '1.6' }}>We serve entertainment businesses across all segments — from independent productions to major studios, intimate venues to arenas, and digital platforms to live festivals.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 stagger-children">
          {segments.map((seg) => (
            <Link key={seg.name} href={`/industries/${seg.slug}/`} className="group border-2 border-ash rounded-[2rem] p-6 text-center bg-white/40 no-underline block" style={{ transition: 'all 0.24s' }}>
              <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold" style={{ transition: 'all 0.24s' }}>
                <svg className="w-6 h-6 text-stone group-hover:text-brand" style={{ transition: 'color 0.24s' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
                </svg>
              </div>
              <h3 className="text-brand font-bold mb-1" style={{ fontSize: '0.9rem' }}>{seg.name}</h3>
              <p className="text-brand/60" style={{ fontSize: '0.75rem', lineHeight: '1.4' }}>{seg.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
