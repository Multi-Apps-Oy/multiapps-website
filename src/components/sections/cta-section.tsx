import { useTranslations } from 'next-intl';
import { AppStoreLinks } from './app-store-links';
import { AnimatedSection } from './animated-section';

export function CtaSection() {
  const t = useTranslations('cta');

  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-primary/10 via-secondary/30 to-accent/10 p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{t('subtitle')}</p>
              <div className="mt-8">
                <AppStoreLinks />
              </div>
            </div>
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 -z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
