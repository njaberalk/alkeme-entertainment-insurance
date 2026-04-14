import HomeContent from './HomeContent';

export const metadata = {
  title: 'Entertainment Insurance Solutions',
  description: 'ALKEME Insurance Services provides specialized entertainment insurance for productions, venues, events, and media companies. Coverage for general liability, production insurance, event cancellation, E&O, and more.',
  openGraph: {
    title: 'Entertainment Insurance | ALKEME Insurance Services',
    description: 'Specialized entertainment insurance for productions, venues, events, and media companies across all 50 states.',
    url: 'https://alkemeins.com/entertainment/',
  },
};

export default function HomePage() {
  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <meta property="article:published_time" content="2025-06-01T00:00:00Z" />
      <meta property="article:modified_time" content="2026-04-01T00:00:00Z" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'InsuranceAgency',
            name: 'ALKEME Insurance Services',
            url: 'https://alkemeins.com',
            telephone: '+18559255363',
            email: 'info@alkemeins.com',
            description: 'ALKEME Insurance Services provides specialized entertainment insurance solutions for productions, venues, events, and media companies across all 50 states.',
            areaServed: { '@type': 'Country', name: 'United States' },
            parentOrganization: {
              '@type': 'Organization',
              name: 'ALKEME Insurance Services',
              url: 'https://alkemeins.com',
            },
            foundingDate: '2003',
            numberOfEmployees: { '@type': 'QuantitativeValue', value: 100 },
            knowsAbout: ['Entertainment Insurance', 'Production Insurance', 'Event Cancellation Insurance', 'Venue Liability'],
            hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'Licensed Insurance Brokerage' },
            serviceType: [
              'Entertainment Insurance',
              'Production Insurance',
              'Event Cancellation Insurance',
              'Venue Liability Insurance',
              'Film & TV Insurance',
              'Equipment Coverage',
              'Errors & Omissions Insurance',
            ],
            citation: { '@type': 'CreativeWork', name: 'Insurance Information Institute', url: 'https://www.iii.org' },
            about: { '@type': 'Thing', name: 'Entertainment Insurance' },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What insurance does an entertainment business need?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At minimum, most entertainment operations require general liability, workers compensation, and coverage specific to their segment. Productions need production packages and E&O. Events need cancellation coverage. Venues need premises and liquor liability. We help you identify exactly what your operation requires.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you insure both small productions and major studios?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We work with independent filmmakers on micro-budget projects as well as major production companies with multi-million dollar budgets. Our coverage programs are scaled and customized to match the size and complexity of each operation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you help with certificates of insurance for venues and locations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We understand the insurance requirements that venues, filming locations, permit offices, and talent agencies impose. We issue certificates of insurance quickly and accurately, with the additional insured endorsements and specific coverage details each party requires.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get a quote?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, we can provide an initial quote within 24 to 48 hours of receiving your completed information. For production insurance involving cast medical examinations or complex event programs, the process may take slightly longer.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you offer event cancellation and weather coverage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Event cancellation insurance is one of our core offerings. We provide coverage for weather, non-appearance, force majeure, and other covered perils. Weather triggers can be customized to specific conditions relevant to your event.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can coverage be customized for my specific operation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every policy we place is built around your specific operation. We consider your production type, venue characteristics, event scale, equipment values, and business goals to design a program that provides the right coverage at a competitive price.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Entertainment Insurance Solutions',
            datePublished: '2025-06-01',
            dateModified: '2026-04-01',
            author: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
            publisher: { '@type': 'Organization', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
          }),
        }}
      />
      <HomeContent />
    </>
  );
}
