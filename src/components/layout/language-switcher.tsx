'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import type { Locale } from '@/types';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const nextLocale = locale === 'fi' ? 'en' : 'fi';

  function handleSwitch() {
    router.replace(pathname, { locale: nextLocale });
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleSwitch}
      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
      aria-label={`Switch to ${nextLocale === 'fi' ? 'Finnish' : 'English'}`}
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}
