import CoverageNeedsContent from './CoverageNeedsContent';

export const metadata = {
  title: 'Entertainment Coverage Needs Assessment',
  description: 'Find out exactly what insurance coverage your entertainment operation needs. Select your business type to see recommended coverages, requirements, and cost guidance.',
  alternates: {
    canonical: 'https://alkemeins.com/entertainment/tools/coverage-needs-assessment/',
  },
  openGraph: {
    title: 'Entertainment Coverage Needs Assessment | ALKEME Insurance Services',
    description: 'Interactive tool to determine your entertainment insurance requirements based on business type and operations.',
    url: 'https://alkemeins.com/entertainment/tools/coverage-needs-assessment/',
    type: 'website',
  },
};

export default function CoverageNeedsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Entertainment Coverage Needs Assessment',
      url: 'https://alkemeins.com/entertainment/tools/coverage-needs-assessment/',
      applicationCategory: 'BusinessApplication',
      provider: { '@type': 'InsuranceAgency', name: 'ALKEME Insurance Services', url: 'https://alkemeins.com' },
      description: 'Interactive tool to determine your entertainment insurance requirements by business type and operations.',
    },
  ];

  return (
    <>
      <meta name="author" content="ALKEME Insurance Services" />
      {jsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      ))}
      <CoverageNeedsContent />
    </>
  );
}
