import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';

export const metadata: Metadata = {
  title: 'Journalist Site',
  description: 'Simple publishing platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="p-4 border-b mb-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Get in touch</Link>
          <Link href="/admin">Admin</Link>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
