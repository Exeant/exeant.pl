import Link from 'next/link';
import type { Locale } from '@/lib/i18n/dictionaries';
import { dictionaries } from '@/lib/i18n/dictionaries';

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const links = [
    ['digital', t.nav.digital], ['projects', t.nav.projects], ['tech-gear', t.nav.tech], ['beyond', t.nav.beyond], ['contact', t.nav.contact],
  ];

  return (
    <header className="site-header">
      <Link className="wordmark" href={`/${locale}`} aria-label="EXEANT home">EXEANT<span>.</span></Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([href, label]) => <Link key={href} href={`/${locale}/${href}`}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className={locale === 'pl' ? 'lang active' : 'lang'} href="/pl">PL</Link>
        <span className="lang-separator">/</span>
        <Link className={locale === 'en' ? 'lang active' : 'lang'} href="/en">EN</Link>
        <Link className="menu-link" href={`/${locale}/contact`}>LET'S TALK <span>↗</span></Link>
      </div>
    </header>
  );
}
