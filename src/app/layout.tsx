import type { ReactNode } from 'react';
import { GeistSans } from 'geist/font/sans';
import '@/styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fi" className="dark" suppressHydrationWarning>
      <body className={`${GeistSans.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
