import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Building2, Hash } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { Card, CardContent } from '@/components/ui/card';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { AnimatedSection } from '@/components/sections/animated-section';
import { HeroAnimation } from '@/components/sections/hero-animation';
import { routing } from '@/i18n/routing';
import { BotproofEmail } from '@/components/ui/botproof-email';
import type { PageProps } from '@/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.contact' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/yhteystiedot',
    locale,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contactPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'Yhteystiedot', href: '/fi/yhteystiedot/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'Contact', href: '/en/yhteystiedot/' },
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
            </div>
          </HeroAnimation>

          <div className="mx-auto max-w-2xl">
            <AnimatedSection delay={0.1}>
              <Card className="glow-card border-border/50 bg-secondary/20">
                <CardContent className="p-8">
                  <h2 className="text-xl font-semibold">{t('info.title')}</h2>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Building2 className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.company')}</p>
                        <p className="font-medium">Multi-Apps Oy</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.email')}</p>
                        <BotproofEmail
                          user="info"
                          domain="multiapps.fi"
                          className="font-medium transition-colors hover:text-primary text-left"
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Hash className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.businessId')}</p>
                        <p className="font-medium">3606746-9</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{t('info.location')}</p>
                        <p className="font-medium">{t('info.locationValue')}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
