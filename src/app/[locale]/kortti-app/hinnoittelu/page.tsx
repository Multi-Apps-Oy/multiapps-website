import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Check } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { AnimatedSection } from '@/components/sections/animated-section';
import { HeroAnimation } from '@/components/sections/hero-animation';
import { APP_STORE_URL } from '@/lib/constants';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

const FEATURE_KEYS = [
  'unlimited',
  'capture',
  'expiration',
  'pdf',
  'share',
  'reorder',
  'darkMode',
  'noAds',
  'noAccount',
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pricing' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/kortti-app/hinnoittelu',
    locale,
  });
}

export default async function PricingPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'pricingPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'KorttiApp', href: '/fi/kortti-app/' },
          { name: 'Hinnoittelu', href: '/fi/kortti-app/hinnoittelu/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'KorttiApp', href: '/en/kortti-app/' },
          { name: 'Pricing', href: '/en/kortti-app/hinnoittelu/' },
        ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <HeroAnimation>
            <div className="mb-16 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="gradient-text">{t('title')}</span>
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {t('subtitle')}
              </p>
            </div>
          </HeroAnimation>

          <AnimatedSection className="mx-auto max-w-md">
            <Card className="glow-card gradient-border border-0 bg-secondary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{t('plan.name')}</CardTitle>
                <div className="mt-2">
                  <span className="text-5xl font-bold gradient-text">{t('plan.price')}</span>
                  <span className="ml-2 text-muted-foreground">/ {t('plan.period')}</span>
                </div>
                <CardDescription className="mt-2">{t('plan.description')}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {FEATURE_KEYS.map((key) => (
                    <li key={key} className="flex items-center gap-3">
                      <Check className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm">{t(`plan.features.${key}`)}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full" size="lg" asChild>
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                    {t('cta')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
