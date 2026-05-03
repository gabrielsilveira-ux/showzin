import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="container">
          <h1>Showzin</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/eventos">Eventos</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/cidades/campinas">Cidades</Link>
            <Link href="/admin">Admin</Link>
          </nav>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
