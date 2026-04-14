'use client';
import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function RelatedIndustries({ slugs, title = 'Industries That Need This Coverage' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const industryNames = {
    'film-production': 'Film & TV Production', 'live-events': 'Live Events', 'music-venues': 'Music Venues',
    'theaters-performing-arts': 'Theaters & Performing Arts', 'sports-entertainment': 'Sports Entertainment',
    'amusement-parks': 'Amusement Parks', 'nightclubs-bars': 'Nightclubs & Bars',
    'streaming-media': 'Streaming & Digital Media', 'festivals-fairs': 'Festivals & Fairs',
    'talent-agencies': 'Talent Agencies',
  };

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '5rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold leading-[1.3] tracking-tight mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.2rem)' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/industries/${slug}/`} className="block border-2 border-ash rounded-[2rem] p-5 group no-underline hover:border-blue-dark text-center" style={{ transition: 'all 0.24s' }}>
              <h3 className="text-brand font-bold group-hover:text-blue-dark" style={{ fontSize: '1rem', transition: 'color 0.24s' }}>{industryNames[slug] || slug}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RelatedResourceLinks({ slugs, title = 'Helpful Resources' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const resourceNames = {
    'entertainment-insurance-cost': 'How Much Does Entertainment Insurance Cost?',
    'production-insurance-guide': 'The Complete Guide to Production Insurance',
    'event-cancellation-guide': 'Event Cancellation Insurance Guide',
    'film-tv-insurance-guide': 'Film & TV Insurance: A Producer\'s Guide',
    'venue-liability-guide': 'Venue Liability Insurance Guide',
    'equipment-coverage-guide': 'Equipment Coverage Guide',
    'certificate-of-insurance-guide': 'Certificate of Insurance Guide',
    'claims-guide': 'Entertainment Insurance Claims Guide',
    'entertainment-insurance-glossary': 'Entertainment Insurance Glossary',
  };

  return (
    <div ref={ref} className="bg-brand fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-stone font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slugs.map(slug => (
            <Link key={slug} href={`/resources/${slug}/`} className="block border border-ash/20 rounded-[2rem] p-5 group no-underline hover:border-gold/30" style={{ transition: 'all 0.24s' }}>
              <span className="text-blue uppercase tracking-[0.12em] font-bold block mb-1" style={{ fontSize: '0.6rem' }}>Guide</span>
              <span className="text-stone font-bold group-hover:text-gold block" style={{ fontSize: '0.9rem', transition: 'color 0.24s' }}>{resourceNames[slug] || slug}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopStates({ slugs, title = 'Top States' }) {
  const ref = useScrollAnimation();
  if (!slugs?.length) return null;

  const stateNames = {
    'california': 'California', 'new-york': 'New York', 'georgia': 'Georgia', 'texas': 'Texas',
    'louisiana': 'Louisiana', 'illinois': 'Illinois', 'florida': 'Florida', 'nevada': 'Nevada',
    'tennessee': 'Tennessee', 'washington': 'Washington', 'colorado': 'Colorado', 'ohio': 'Ohio',
    'pennsylvania': 'Pennsylvania', 'new-jersey': 'New Jersey', 'new-mexico': 'New Mexico',
    'oklahoma': 'Oklahoma', 'minnesota': 'Minnesota', 'maryland': 'Maryland',
    'north-carolina': 'North Carolina', 'connecticut': 'Connecticut', 'massachusetts': 'Massachusetts',
    'virginia': 'Virginia', 'kentucky': 'Kentucky', 'oregon': 'Oregon', 'hawaii': 'Hawaii',
    'arizona': 'Arizona', 'indiana': 'Indiana', 'michigan': 'Michigan',
  };

  return (
    <div ref={ref} className="bg-stone fade-in-view" style={{ padding: '4rem 0' }}>
      <div className="max-w-[68rem] mx-auto px-[60px] max-lg:px-6 max-md:px-4">
        <h2 className="text-brand font-bold mb-6" style={{ fontSize: '1.3rem' }}>{title}</h2>
        <div className="flex flex-wrap gap-3">
          {slugs.map(slug => (
            <Link key={slug} href={`/states/${slug}/`} className="border-2 border-ash rounded-[2rem] px-5 py-2 text-brand font-semibold hover:border-blue-dark hover:text-blue-dark no-underline" style={{ fontSize: '0.85rem', transition: 'all 0.24s' }}>
              {stateNames[slug] || slug}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function CitiesInState({ stateSlug, stateName }) {
  const ref = useScrollAnimation();
  return null; // Handled in the page template directly
}
