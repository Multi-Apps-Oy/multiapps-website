'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function MobileNav() {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] pt-12">
        <nav className="flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-foreground transition-colors hover:text-primary"
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
