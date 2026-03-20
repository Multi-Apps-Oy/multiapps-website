export type Locale = 'fi' | 'en';

export type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export type Feature = {
  titleKey: string;
  descriptionKey: string;
  icon: string;
};

export type NavItem = {
  labelKey: string;
  href: string;
};
