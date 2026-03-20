import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { GeistSans } from 'geist/font/sans';
import { routing } from '@/i18n/routing';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { JsonLd } from '@/components/seo/json-ld';
import '@/styles/globals.css';

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'fi' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background text-foreground antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          }}
        />
      </body>
    </html>
  );
}
