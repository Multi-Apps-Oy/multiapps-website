import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="fi" className="dark">
      <body className="flex min-h-screen items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="mt-2 text-muted-foreground">Sivua ei löytynyt / Page not found</p>
          <Link href="/fi/" className="mt-4 inline-block text-primary hover:underline">
            Etusivulle / Go home
          </Link>
        </div>
      </body>
    </html>
  );
}
