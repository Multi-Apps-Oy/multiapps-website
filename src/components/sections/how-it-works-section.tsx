import { useTranslations } from 'next-intl';
import { Camera, CreditCard, Share2 } from 'lucide-react';
import { AnimatedSection } from './animated-section';

const STEP_ICONS = [Camera, CreditCard, Share2];
const STEP_KEYS = ['capture', 'browse', 'share'] as const;

export function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  return (
    <section className="section-gradient py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-3">
          {STEP_KEYS.map((key, index) => {
            const Icon = STEP_ICONS[index];
            return (
              <AnimatedSection key={key} delay={index * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="mb-2 text-sm font-semibold text-primary">
                    {t(`steps.${key}.step`)}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{t(`steps.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`steps.${key}.description`)}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
