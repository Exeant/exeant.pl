import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'EXEANT — Digital & Beyond', template: '%s | EXEANT' },
  description: 'Independent digital creator. Websites, technology, automotive and beyond.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html><body>{children}</body></html>;
}
