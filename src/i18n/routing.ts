import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['fi', 'en'],
  defaultLocale: 'fi',
  localePrefix: 'always',
});

export type Pathnames = string;
export type Locale = (typeof routing.locales)[number];
