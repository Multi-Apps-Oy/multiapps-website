import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { SITE_NAME, FOOTER_LINKS } from '@/lib/constants';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-lg font-bold tracking-tight">
              <span className="gradient-text">{SITE_NAME}</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{t('footer.description')}</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.products')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.company')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {SITE_NAME}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  );
}
