import type { Metadata } from 'next';
import { Instrument_Sans } from 'next/font/google';
import Header from '@/ui/layout/Header/Header';
import './globals.css';

const sans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Lo Eklöf Örnestål',
  description: 'Art director who codes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
