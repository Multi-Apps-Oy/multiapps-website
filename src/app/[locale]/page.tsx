import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Sparkles } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/seo/json-ld';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/sections/animated-section';
import { HeroAnimation } from '@/components/sections/hero-animation';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/',
    locale,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tHero = await getTranslations({ locale, namespace: 'companyHero' });
  const tProducts = await getTranslations({ locale, namespace: 'companyProducts' });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <HeroAnimation>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="gradient-text">{tHero('headline')}</span>
              </h1>
            </div>
          </HeroAnimation>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-gradient py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimatedSection>
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                <span className="gradient-text">{tProducts('title')}</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="mx-auto max-w-sm">
            <AnimatedSection delay={0.1}>
              <Card className="border-border/50 bg-secondary/10">
                <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50">
                    <Sparkles className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-muted-foreground">
                    {tProducts('comingSoon.title')}
                  </h3>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          description: locale === 'fi'
            ? 'Suomalainen ohjelmistoyritys, joka kehittää käytännöllisiä mobiilisovelluksia.'
            : 'A Finnish software company developing practical mobile applications.',
        }}
      />
    </>
  );
}
