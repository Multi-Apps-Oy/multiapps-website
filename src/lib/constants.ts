export const SITE_NAME = 'Multi-Apps Oy';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://multi-apps.fi';

export const APP_STORE_URL = '#'; // Placeholder — replace with real App Store URL
export const GOOGLE_PLAY_URL = '#'; // Placeholder — replace with real Google Play URL

export const NAV_ITEMS = [
  { labelKey: 'nav.products', href: '/kortti-app' as const },
  { labelKey: 'nav.contact', href: '/yhteystiedot' as const },
] as const;

export const FOOTER_LINKS = {
  products: [
    { labelKey: 'footer.korttiApp', href: '/kortti-app' as const },
  ],
  company: [
    { labelKey: 'footer.contact', href: '/yhteystiedot' as const },
  ],
  legal: [
    { labelKey: 'footer.privacy', href: '/tietosuoja' as const },
    { labelKey: 'footer.terms', href: '/ehdot' as const },
  ],
} as const;
