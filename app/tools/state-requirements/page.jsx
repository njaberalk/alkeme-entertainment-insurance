import StateRequirementsContent from './StateRequirementsContent';

export const metadata = {
  title: 'State Entertainment Insurance Requirements Lookup',
  description: 'Look up entertainment insurance requirements by state. See film tax credits, workers comp rules, venue licensing, and state-specific regulations for all 50 states.',
  alternates: {
    canonical: 'https://alkemeins.com/entertainment/tools/state-requirements/',
  },
  openGraph: {
    title: 'State Entertainment Insurance Requirements Lookup | ALKEME Insurance Services',
    description: 'Interactive tool to look up entertainment insurance requirements for any US state.',
    url: 'https://alkemeins.com/entertainment/tools/state-requirements/',
    type: 'website',
  },
};

export default function StateRequirementsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'State Entertainment Insurance Requirements Lookup',
    url: 'https://alkemeins.com/entertainment/tools/state-requirements/',
    applicationCategory: 'BusinessApplication',
    provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
    description: 'Look up entertainment insurance requirements for any US state including film incentives, workers comp, and venue licensing.',
  };

  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StateRequirementsContent />
    </>
  );
}
