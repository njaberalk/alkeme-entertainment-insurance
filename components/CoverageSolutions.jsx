'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const coverages = [
  { title: 'General Liability', slug: 'general-liability', desc: 'Protects against third-party bodily injury and property damage claims at venues, on sets, and at live events.' },
  { title: 'Production Insurance', slug: 'production-insurance', desc: 'Comprehensive packages for film, TV, and commercial productions including cast, negative film, props, and extra expense.' },
  { title: 'Event Cancellation', slug: 'event-cancellation', desc: 'Financial protection when events must be cancelled or postponed due to weather, non-appearance, or force majeure.' },
  { title: 'Equipment Floater', slug: 'equipment-floater', desc: 'Inland marine coverage for cameras, lighting, sound systems, instruments, and production equipment wherever they travel.' },
  { title: 'Workers\' Compensation', slug: 'workers-compensation', desc: 'Mandatory coverage for cast and crew injuries on set, backstage, and at venues with entertainment-specific classifications.' },
  { title: 'Commercial Auto', slug: 'commercial-auto', desc: 'Liability and physical damage coverage for production vehicles, equipment transport, and talent transportation.' },
  { title: 'Errors & Omissions', slug: 'errors-omissions', desc: 'Content clearance and media liability coverage for copyright, defamation, privacy, and intellectual property claims.' },
  { title: 'Cyber Liability', slug: 'cyber-liability', desc: 'Protection against data breaches, content piracy, ransomware attacks, and digital asset theft.' },
  { title: 'Umbrella / Excess', slug: 'umbrella-excess', desc: 'Additional limits above underlying policies for catastrophic claims at large-scale events and productions.' },
  { title: 'Employment Practices', slug: 'employment-practices', desc: 'Coverage for wrongful termination, discrimination, harassment, and retaliation claims in entertainment workplaces.' },
];

export default function CoverageSolutions() {
  const headerRef = useScrollAnimation();
  const gridRef = useScrollAnimation(0.05);

  return (
    <section id="coverage" className="bg-brand" style={{ padding: '8rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 fade-in-view">
          <p className="text-blue uppercase tracking-[0.15em] font-bold mb-4" style={{ fontSize: '0.85rem' }}>Coverage Solutions</p>
          <h2 className="text-stone font-bold leading-[1.3] tracking-tight mb-5" style={{ fontSize: 'clamp(2.2rem, 4vw, 2.6rem)' }}>Comprehensive Coverage for Every Production</h2>
          <p className="text-cream font-light" style={{ lineHeight: '22px' }}>From production packages to event cancellation, we provide the coverage lines that keep your entertainment operation protected and compliant.</p>
        </div>
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children">
          {coverages.map((item) => (
            <Link key={item.title} href={`/coverage/${item.slug}/`} className="block border-2 border-ash/30 rounded-[2rem] p-8 group no-underline" style={{ background: 'rgba(255,255,255,0.04)', transition: 'all 0.24s' }}>
              <h3 className="text-stone font-bold mb-3 group-hover:text-gold" style={{ fontSize: '1.25rem', lineHeight: '1.5', transition: 'color 0.24s' }}>{item.title}</h3>
              <p className="text-cream font-light" style={{ fontSize: '0.85rem', lineHeight: '22px' }}>{item.desc}</p>
              <span className="text-gold text-xs font-semibold uppercase tracking-[0.16em] mt-4 inline-block opacity-0 group-hover:opacity-100" style={{ transition: 'opacity 0.24s' }}>Learn More</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link href="/#contact" className="inline-flex items-center justify-center border-2 border-gold bg-gold text-brand text-center uppercase tracking-[0.16em] rounded-[2rem] font-semibold hover:border-stone hover:bg-stone hover:text-brand no-underline" style={{ padding: '0.8rem 1.8rem 0.7rem', fontSize: '0.75rem', lineHeight: '2', transition: 'all 0.24s' }}>
            Discuss Your Coverage Needs
          </Link>
        </div>
      </div>
    </section>
  );
}
