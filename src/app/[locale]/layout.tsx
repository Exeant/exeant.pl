import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/dictionaries';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  return <><SiteHeader locale={locale as Locale} /><main>{children}</main><SiteFooter locale={locale as Locale} /></>;
}
