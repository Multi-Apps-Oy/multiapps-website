import { useTranslations } from 'next-intl';
import { AppStoreLinks } from './app-store-links';
import { HeroAnimation } from './hero-animation';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <HeroAnimation>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="gradient-text">{t('headline')}</span>
              </h1>
              <p className="max-w-lg text-lg text-muted-foreground sm:text-xl">
                {t('subheadline')}
              </p>
              <AppStoreLinks />
            </div>

            {/* Device mockup placeholder */}
            <div className="flex items-center justify-center lg:justify-end">
              <div className="relative h-[500px] w-[260px] rounded-[2.5rem] border-2 border-border bg-secondary/30 p-2 shadow-2xl">
                <div className="flex h-full w-full items-center justify-center rounded-[2rem] bg-background/50">
                  <p className="text-sm text-muted-foreground">{t('screenshotPlaceholder')}</p>
                </div>
                {/* Glow effect behind device */}
                <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />
              </div>
            </div>
          </div>
        </HeroAnimation>
      </div>
    </section>
  );
}
