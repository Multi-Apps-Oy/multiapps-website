import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { JsonLd } from '@/components/seo/json-ld';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/sections/animated-section';
import { HeroAnimation } from '@/components/sections/hero-animation';
import { Link } from '@/i18n/navigation';
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
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                {tHero('subheadline')}
              </p>
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
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                {tProducts('subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            <AnimatedSection delay={0.1}>
              <Card className="glow-card h-full border-border/50 bg-secondary/20 transition-all hover:border-primary/30">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <CreditCard className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{tProducts('korttiApp.title')}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {tProducts('korttiApp.description')}
                  </p>
                  <Button className="mt-6" variant="outline" asChild>
                    <Link href="/kortti-app">
                      {tProducts('korttiApp.cta')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full border-border/50 bg-secondary/10">
                <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50">
                    <Sparkles className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-muted-foreground">
                    {tProducts('comingSoon.title')}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tProducts('comingSoon.description')}
                  </p>
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
