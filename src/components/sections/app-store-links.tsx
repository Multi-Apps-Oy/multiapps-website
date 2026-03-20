import { useTranslations } from 'next-intl';
import { Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { APP_STORE_URL, GOOGLE_PLAY_URL } from '@/lib/constants';

export function AppStoreLinks() {
  const t = useTranslations('hero');

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <Button size="lg" asChild className="gap-2">
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <Smartphone className="h-5 w-5" />
          App Store
        </a>
      </Button>
      <Button size="lg" variant="outline" asChild className="gap-2">
        <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">
          <Smartphone className="h-5 w-5" />
          Google Play
        </a>
      </Button>
    </div>
  );
}
