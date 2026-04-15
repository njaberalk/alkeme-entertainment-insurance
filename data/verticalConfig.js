export const verticalConfig = {
  id: 'entertainment', label: 'Entertainment Insurance',
  heading: 'Get an Entertainment Insurance Quote',
  subtext: 'Answer a few quick questions and our entertainment specialists will design coverage for your production or event.',
  businessTypes: [
    { value: 'film-production', label: 'Film / TV Production' },
    { value: 'live-event', label: 'Live Event / Concert' },
    { value: 'music-venue', label: 'Music Venue' },
    { value: 'theater', label: 'Theater / Performing Arts' },
    { value: 'sports', label: 'Sports / Athletics' },
    { value: 'festival', label: 'Festival / Fair' },
  ],
  customQuestions: [
    { id: 'event_type', label: 'What type of entertainment?', type: 'select', options: ['Film/TV Production', 'Live Event', 'Music Venue', 'Theater', 'Sports', 'Festival'] },
    { id: 'frequency', label: 'Single event or ongoing?', type: 'select', options: ['Single event', 'Ongoing operations', 'Annual policy'] },
    { id: 'budget', label: 'Estimated budget/revenue?', type: 'select', options: ['Under $100K', '$100K-$500K', '$500K-$2M', '$2M+'] },
  ],
  coverageOptions: ['General Liability', 'Production Insurance', 'Event Cancellation', 'Equipment Floater', 'Workers\' Compensation', 'Commercial Auto', 'Errors & Omissions', 'Cyber Liability', 'Umbrella / Excess', 'Employment Practices'],
};
