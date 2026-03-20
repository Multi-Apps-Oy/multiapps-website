'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';

export function Header() {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="gradient-text">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
