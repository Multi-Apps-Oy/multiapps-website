import { getTranslations, setRequestLocale } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.roadpointPrivacy' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/roadpoint-tietosuojaseloste',
    locale,
  });
}

export default async function RoadPointPrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale: 'fi', namespace: 'roadpointPrivacyPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'RoadPoint Tietosuojaseloste', href: '/fi/roadpoint-tietosuojaseloste/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'RoadPoint Privacy Policy', href: '/en/roadpoint-tietosuojaseloste/' },
        ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t('lastUpdated')}</p>

          <div className="mt-12 space-y-8">
            {/* 1. Yleistä */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.general.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.general.content')}</p>
            </div>

            {/* 2. Rekisterinpitäjä */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.controller.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.controller.content')}</p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-semibold">{t('sections.controller.company')}</p>
                <p>{t('sections.controller.address')}</p>
                <p>{t('sections.controller.city')}</p>
                <p>{t('sections.controller.emailLabel')}: {t('sections.controller.email')}</p>
              </div>
            </div>

            {/* 3. Tietojen kerääminen */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.dataCollection.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.dataCollection.content')}</p>
            </div>

            {/* 4. Paikallinen tallennus */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.localStorage.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.localStorage.content')}</p>
            </div>

            {/* 5. Ulkoiset rajapinnat */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.externalApis.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.externalApis.content1')}</p>
              <p className="mt-2 text-muted-foreground">{t('sections.externalApis.content2')}</p>
            </div>

            {/* 6. Lisenssikoodi */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.licenseCode.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.licenseCode.content')}</p>
            </div>

            {/* 7. Kamera ja kuvagalleria */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.camera.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.camera.content')}</p>
            </div>

            {/* 8. Jakaminen */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.sharing.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.sharing.content')}</p>
            </div>

            {/* 9. Analytiikka ja mainokset */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.analytics.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.analytics.content')}</p>
            </div>

            {/* 10. Tietoturva */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.security.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.security.content')}</p>
            </div>

            {/* 11. Lapset */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.children.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.children.content')}</p>
            </div>

            {/* 12. Käyttäjän oikeudet (GDPR) */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.gdpr.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.gdpr.content')}</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                <li><strong>{t('sections.gdpr.inspect.label')}</strong> {t('sections.gdpr.inspect.content')}</li>
                <li><strong>{t('sections.gdpr.delete.label')}</strong> {t('sections.gdpr.delete.content')}</li>
                <li><strong>{t('sections.gdpr.consent.label')}</strong> {t('sections.gdpr.consent.content')}</li>
              </ul>
            </div>

            {/* 13. Muutokset */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.changes.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.changes.content')}</p>
            </div>

            {/* 14. Yhteystiedot */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.contact.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.contact.content')}</p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-semibold">{t('sections.contact.company')}</p>
                <p>{t('sections.contact.emailLabel')}: {t('sections.contact.email')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
