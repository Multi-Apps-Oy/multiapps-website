import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { generatePageMetadata } from '@/lib/metadata';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-json-ld';
import { routing } from '@/i18n/routing';
import type { PageProps } from '@/types';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.roadpointTerms' });

  return generatePageMetadata({
    title: t('title'),
    description: t('description'),
    path: '/roadpoint-ehdot',
    locale,
  });
}

export default async function RoadPointTermsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale: 'fi', namespace: 'roadpointTermsPage' });

  const breadcrumbs =
    locale === 'fi'
      ? [
          { name: 'Etusivu', href: '/fi/' },
          { name: 'RoadPoint Käyttöehdot', href: '/fi/roadpoint-ehdot/' },
        ]
      : [
          { name: 'Home', href: '/en/' },
          { name: 'RoadPoint Terms of Service', href: '/en/roadpoint-ehdot/' },
        ];

  return (
    <>
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t('title')}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{t('effectiveDate')}</p>

          <div className="mt-12 space-y-8">
            {/* 1. Yleistä */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.general.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.general.content')}</p>
            </div>

            {/* 2. Palvelun kuvaus */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.service.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.service.content')}</p>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.service.internet.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.service.internet.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.service.location.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.service.location.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.service.availability.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.service.availability.content1')}</p>
              </div>
            </div>

            {/* 3. Tilausmalli ja maksut */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.subscription.title')}</h2>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.subscription.plan.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.subscription.plan.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.subscription.trial.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.subscription.trial.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.subscription.payment.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.subscription.payment.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.subscription.cancellation.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.subscription.cancellation.content')}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.subscription.license.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.subscription.license.content')}</p>
              </div>
            </div>

            {/* 4. Ulkoiset palvelut ja rajapinnat */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.externalServices.title')}</h2>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.externalServices.thirdParty.title')}</h3>
                <p className="mt-2 text-muted-foreground">{t('sections.externalServices.thirdParty.content')}</p>
                <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                  <li><strong>{t('sections.externalServices.thirdParty.item1')}</strong></li>
                  <li><strong>{t('sections.externalServices.thirdParty.item2')}</strong></li>
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium">{t('sections.externalServices.disclaimer.title')}</h3>
                <p className="mt-2 font-semibold text-muted-foreground">{t('sections.externalServices.disclaimer.content1')}</p>
                <p className="mt-2 text-muted-foreground">{t('sections.externalServices.disclaimer.content2')}</p>
                <p className="mt-2 text-muted-foreground">{t('sections.externalServices.disclaimer.content3')}</p>
                <p className="mt-2 text-muted-foreground">{t('sections.externalServices.disclaimer.content4')}</p>
              </div>
            </div>

            {/* 5. Tietojen tarkkuus */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.accuracy.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.accuracy.content')}</p>
            </div>

            {/* 6. Käyttäjän velvollisuudet */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.userObligations.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.userObligations.content')}</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                <li>{t('sections.userObligations.item1')}</li>
                <li>{t('sections.userObligations.item2')}</li>
                <li>{t('sections.userObligations.item3')}</li>
                <li>{t('sections.userObligations.item4')}</li>
              </ul>
            </div>

            {/* 7. Vastuunrajoitus */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.liability.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.liability.content')}</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                <li>{t('sections.liability.item1')}</li>
                <li>{t('sections.liability.item2')}</li>
                <li>{t('sections.liability.item3')}</li>
              </ul>
            </div>

            {/* 8. Palvelun keskeyttäminen ja lopettaminen */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.suspension.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.suspension.content1')}</p>
              <p className="mt-2 text-muted-foreground">{t('sections.suspension.content2')}</p>
              <p className="mt-2 text-muted-foreground">{t('sections.suspension.content3')}</p>
            </div>

            {/* 9. Immateriaalioikeudet */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.ip.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.ip.content')}</p>
            </div>

            {/* 10. Tietosuoja */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.privacy.title')}</h2>
              <p className="mt-2 text-muted-foreground">
                {t('sections.privacy.contentBefore')}
                <Link href="/roadpoint-tietosuojaseloste" className="text-primary hover:underline">{t('sections.privacy.link')}</Link>
                {t('sections.privacy.contentAfter')}
              </p>
            </div>

            {/* 11. Force majeure */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.forceMajeure.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.forceMajeure.content')}</p>
              <ul className="mt-2 list-disc space-y-1 pl-6 text-muted-foreground">
                <li>{t('sections.forceMajeure.item1')}</li>
                <li>{t('sections.forceMajeure.item2')}</li>
                <li>{t('sections.forceMajeure.item3')}</li>
                <li>{t('sections.forceMajeure.item4')}</li>
                <li>{t('sections.forceMajeure.item5')}</li>
              </ul>
              <p className="mt-2 text-muted-foreground">{t('sections.forceMajeure.closing')}</p>
            </div>

            {/* 12. Ehtojen muuttaminen */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.modifications.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.modifications.content')}</p>
            </div>

            {/* 13. Sovellettava laki ja riidanratkaisu */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.law.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.law.content')}</p>
            </div>

            {/* 14. Yhteystiedot */}
            <div>
              <h2 className="text-xl font-semibold">{t('sections.contact.title')}</h2>
              <p className="mt-2 text-muted-foreground">{t('sections.contact.content')}</p>
              <div className="mt-4 text-muted-foreground">
                <p className="font-semibold">{t('sections.contact.company')}</p>
                <p>{t('sections.contact.emailLabel')}: {t('sections.contact.email')}</p>
                <p>{t('sections.contact.websiteLabel')}: {t('sections.contact.website')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={breadcrumbs} />
    </>
  );
}
