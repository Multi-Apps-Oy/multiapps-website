import { SITE_URL } from '@/lib/constants';
import { JsonLd } from './json-ld';

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return <JsonLd data={data} />;
}
