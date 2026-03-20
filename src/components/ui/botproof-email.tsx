'use client';

import { useCallback, useMemo } from 'react';

interface BotproofEmailProps {
  user: string;
  domain: string;
  className?: string;
}

export function BotproofEmail({ user, domain, className }: BotproofEmailProps) {
  const email = useMemo(() => `${user}@${domain}`, [user, domain]);
  const handleClick = useCallback(() => {
    window.location.href = `mailto:${email}`;
  }, [email]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
    >
      {user}&#64;{domain}
    </button>
  );
}
