// Cross-linking maps for dense internal linking
// Coverage → which industries commonly need this coverage
export const coverageToIndustries = {
  'general-liability': ['film-production', 'live-events', 'music-venues', 'amusement-parks'],
  'production-insurance': ['film-production', 'streaming-media', 'theaters-performing-arts'],
  'event-cancellation': ['live-events', 'festivals-fairs', 'sports-entertainment'],
  'equipment-floater': ['film-production', 'live-events', 'music-venues'],
  'workers-compensation': ['film-production', 'amusement-parks', 'theaters-performing-arts'],
  'commercial-auto': ['film-production', 'live-events', 'festivals-fairs'],
  'errors-omissions': ['film-production', 'streaming-media', 'talent-agencies'],
  'cyber-liability': ['streaming-media', 'live-events', 'talent-agencies'],
  'umbrella-excess': ['amusement-parks', 'sports-entertainment', 'festivals-fairs'],
  'employment-practices': ['music-venues', 'nightclubs-bars', 'talent-agencies'],
};

// Coverage → which resources are most relevant
export const coverageToResources = {
  'general-liability': ['entertainment-insurance-cost', 'venue-liability-guide', 'certificate-of-insurance-guide'],
  'production-insurance': ['production-insurance-guide', 'film-tv-insurance-guide', 'entertainment-insurance-cost'],
  'event-cancellation': ['event-cancellation-guide', 'entertainment-insurance-cost'],
  'equipment-floater': ['equipment-coverage-guide', 'entertainment-insurance-cost'],
  'workers-compensation': ['entertainment-insurance-cost', 'claims-guide'],
  'commercial-auto': ['entertainment-insurance-cost', 'certificate-of-insurance-guide'],
  'errors-omissions': ['film-tv-insurance-guide', 'production-insurance-guide'],
  'cyber-liability': ['entertainment-insurance-cost', 'claims-guide'],
  'umbrella-excess': ['entertainment-insurance-cost', 'venue-liability-guide'],
  'employment-practices': ['entertainment-insurance-cost', 'claims-guide'],
};

// Industry → top states for that industry
export const industryToStates = {
  'film-production': ['california', 'new-york', 'georgia', 'louisiana', 'texas'],
  'live-events': ['california', 'nevada', 'texas', 'new-york', 'florida'],
  'music-venues': ['tennessee', 'new-york', 'texas', 'california', 'illinois'],
  'theaters-performing-arts': ['new-york', 'california', 'illinois', 'florida', 'washington'],
  'sports-entertainment': ['california', 'texas', 'florida', 'new-york', 'illinois'],
  'amusement-parks': ['florida', 'california', 'ohio', 'texas', 'pennsylvania'],
  'nightclubs-bars': ['nevada', 'new-york', 'florida', 'california', 'texas'],
  'streaming-media': ['california', 'new-york', 'texas', 'georgia', 'washington'],
  'festivals-fairs': ['california', 'tennessee', 'texas', 'nevada', 'illinois'],
  'talent-agencies': ['california', 'new-york', 'tennessee', 'georgia', 'florida'],
};

// Industry → relevant resources
export const industryToResources = {
  'film-production': ['production-insurance-guide', 'film-tv-insurance-guide', 'entertainment-insurance-cost'],
  'live-events': ['event-cancellation-guide', 'venue-liability-guide', 'entertainment-insurance-cost'],
  'music-venues': ['venue-liability-guide', 'entertainment-insurance-cost', 'claims-guide'],
  'theaters-performing-arts': ['production-insurance-guide', 'entertainment-insurance-cost'],
  'sports-entertainment': ['event-cancellation-guide', 'entertainment-insurance-cost'],
  'amusement-parks': ['venue-liability-guide', 'entertainment-insurance-cost', 'claims-guide'],
  'nightclubs-bars': ['venue-liability-guide', 'entertainment-insurance-cost'],
  'streaming-media': ['entertainment-insurance-cost', 'entertainment-insurance-glossary'],
  'festivals-fairs': ['event-cancellation-guide', 'venue-liability-guide', 'entertainment-insurance-cost'],
  'talent-agencies': ['entertainment-insurance-cost', 'certificate-of-insurance-guide'],
};
