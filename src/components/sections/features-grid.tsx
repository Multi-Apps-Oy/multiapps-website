import { useTranslations } from 'next-intl';
import { CreditCard, Camera, Shield, FileText, Palette, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from './animated-section';

const FEATURE_ICONS = [CreditCard, Camera, Shield, FileText, Palette, Share2];

const FEATURE_KEYS = [
  'wallet',
  'capture',
  'expiration',
  'pdf',
  'darkMode',
  'share',
] as const;

export function FeaturesGrid() {
  const t = useTranslations('features');

  return (
    <section className="section-gradient py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURE_KEYS.map((key, index) => {
            const Icon = FEATURE_ICONS[index];
            return (
              <AnimatedSection key={key} delay={index * 0.1}>
                <Card className="glow-card h-full border-border/50 bg-secondary/20 transition-all hover:border-primary/30">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{t(`items.${key}.title`)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(`items.${key}.description`)}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
