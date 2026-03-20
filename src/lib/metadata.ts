import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

type GenerateMetadataArgs = {
  title: string;
  description: string;
  path: string;
  locale: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  locale,
}: GenerateMetadataArgs): Metadata {
  const localePath = path === '/' ? `/${locale}/` : `/${locale}${path}/`;
  const fiPath = path === '/' ? '/fi/' : `/fi${path}/`;
  const enPath = path === '/' ? '/en/' : `/en${path}/`;

  const canonical = `${SITE_URL}${localePath}`;
  const fiUrl = `${SITE_URL}${fiPath}`;
  const enUrl = `${SITE_URL}${enPath}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        fi: fiUrl,
        en: enUrl,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: locale === 'fi' ? 'fi_FI' : 'en_US',
      alternateLocale: locale === 'fi' ? 'en_US' : 'fi_FI',
      type: 'website',
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}
