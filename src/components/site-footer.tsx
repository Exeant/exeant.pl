import Link from 'next/link';
import type { Locale } from '@/lib/i18n/dictionaries';
import { dictionaries } from '@/lib/i18n/dictionaries';

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  return (
    <footer className="site-footer">
      <div><Link className="wordmark" href={`/${locale}`}>EXEANT<span>.</span></Link><p>{t.footer}</p></div>
      <div className="footer-right"><span>© {new Date().getFullYear()} EXEANT</span><a href="https://www.instagram.com/exeant/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a></div>
    </footer>
  );
}
