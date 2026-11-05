import content from '../../content/resources.json';

export const SITE_CONFIG = {
  name: 'ANX Studio Digital',
  logoName: content.brand,
  tagline: 'Digital, explained.',
  domain: content.domain,
  baseUrl: `https://${content.domain}`,
  language: content.language,
  contactEmail: null as string | null,
  socials: content.socials,
  legal: {
    businessName: null as string | null,
    jurisdiction: null as string | null,
    lastUpdated: 'November 5, 2026',
  },
} as const;
