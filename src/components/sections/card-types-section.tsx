import { useTranslations } from 'next-intl';
import { Badge } from '@/components/ui/badge';
import { AnimatedSection } from './animated-section';

const CARD_TYPE_KEYS = [
  'tyoturvakortti',
  'tulityokortti',
  'tieturvakortti',
  'ensiapukortti',
  'valttikortti',
  'perehdytykset',
  'other',
] as const;

export function CardTypesSection() {
  const t = useTranslations('cardTypes');

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t('subtitle')}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex flex-wrap justify-center gap-3">
          {CARD_TYPE_KEYS.map((key) => (
            <Badge
              key={key}
              variant="secondary"
              className="px-4 py-2 text-sm"
            >
              {t(`items.${key}`)}
            </Badge>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
