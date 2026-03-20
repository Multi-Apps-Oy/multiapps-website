import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  CreditCard,
  Camera,
  ScanSearch,
  Clock,
  FileText,
  Image,
  FileInput,
  ArrowUpDown,
  FileStack,
  Shield,
} from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Card, CardContent } from '@/components/ui/card';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { AnimatedSection } from '@/components/sections/animated-section';
import { HeroAnimation } from '@/components/sections/hero-animation';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

const FEATURE_ICONS = [
  CreditCard,
  Camera,
  ScanSearch,
  Clock,
  FileText,
  Image,
  FileInput,
  ArrowUpDown,
  FileStack,
  Shield,
];

const FEATURE_KEYS = [
  'walletView',
  'smartCapture',
  'ocrAutoFill',
  'expirationTracking',
  'pdfSharing',
  'imageSharing',
  'pdfImport',
  'reordering',
  'orientations',
  'privacy',
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.features' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/kortti-app/ominaisuudet',
    locale,
  });
}

export default async function FeaturesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'featuresPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'KorttiApp', href: '/fi/kortti-app/' },
          { name: 'Ominaisuudet', href: '/fi/kortti-app/ominaisuudet/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'KorttiApp', href: '/en/kortti-app/' },
          { name: 'Features', href: '/en/kortti-app/ominaisuudet/' },
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

          <div className="grid gap-6 sm:grid-cols-2">
            {FEATURE_KEYS.map((key, index) => {
              const Icon = FEATURE_ICONS[index];
              return (
                <AnimatedSection key={key} delay={index * 0.08}>
                  <Card className="glow-card h-full border-border/50 bg-secondary/20 transition-all hover:border-primary/30">
                    <CardContent className="flex gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="font-semibold">{t(`items.${key}.title`)}</h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {t(`items.${key}.description`)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
