import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/seo/json-ld';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesGrid } from '@/components/sections/features-grid';
import { CardTypesSection } from '@/components/sections/card-types-section';
import { HowItWorksSection } from '@/components/sections/how-it-works-section';
import { CtaSection } from '@/components/sections/cta-section';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.korttiApp' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/kortti-app',
    locale,
  });
}

export default async function KorttiAppPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'KorttiApp', href: '/fi/kortti-app/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'KorttiApp', href: '/en/kortti-app/' },
        ];

  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <CardTypesSection />
      <HowItWorksSection />
      <CtaSection />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'KorttiApp',
          operatingSystem: 'iOS, Android',
          applicationCategory: 'UtilitiesApplication',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
          },
          url: `${SITE_URL}/fi/kortti-app/`,
          inLanguage: locale === 'fi' ? 'fi' : 'en',
        }}
      />
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
