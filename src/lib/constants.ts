export const SITE_NAME = 'Multi-Apps Oy';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://multi-apps.fi';

export const APP_STORE_URL = '#'; // Placeholder — replace with real App Store URL
export const GOOGLE_PLAY_URL = '#'; // Placeholder — replace with real Google Play URL

export const NAV_ITEMS = [
  { labelKey: 'nav.contact', href: '/yhteystiedot' as const },
] as const;

export const FOOTER_LINKS = {
  products: [] as ReadonlyArray<{ labelKey: string; href: string }>,
  company: [
    { labelKey: 'footer.contact', href: '/yhteystiedot' as const },
  ],
  legal: [
    { labelKey: 'footer.privacy', href: '/tietosuoja' as const },
    { labelKey: 'footer.terms', href: '/ehdot' as const },
    { labelKey: 'footer.roadpointTerms', href: '/roadpoint-ehdot' as const },
    { labelKey: 'footer.roadpointPrivacy', href: '/roadpoint-tietosuojaseloste' as const },
  ],
} as const;
