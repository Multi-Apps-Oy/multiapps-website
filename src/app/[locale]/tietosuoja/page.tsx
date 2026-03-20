import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

const SECTION_KEYS = [
  'intro',
  'dataCollection',
  'localStorage',
  'camera',
  'sharing',
  'analytics',
  'children',
  'changes',
] as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.privacy' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/tietosuoja',
    locale,
  });
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'privacyPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'Tietosuoja', href: '/fi/tietosuoja/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'Privacy', href: '/en/tietosuoja/' },
        ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t('lastUpdated')}</p>

          <div className="mt-12 space-y-8">
            {SECTION_KEYS.map((key) => (
              <div key={key}>
                <h2 className="text-xl font-semibold">{t(`sections.${key}.title`)}</h2>
                <p className="mt-2 text-muted-foreground">{t(`sections.${key}.content`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
