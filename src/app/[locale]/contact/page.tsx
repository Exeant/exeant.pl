import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/dictionaries';

const copy = {
  pl: { eyebrow: '05 / KONTAKT', a: 'Masz coś', b: 'na myśli?', lead: 'Opowiedz krótko o swoim pomyśle. Jeśli możemy stworzyć coś dobrego, odezwij się bezpośrednio.', note: 'Najprościej złapiesz mnie mailowo.', cta: 'Napisz e-mail' },
  en: { eyebrow: '05 / CONTACT', a: 'Have something', b: 'in mind?', lead: 'Tell me a little about your idea. If we can make something great together, get in touch directly.', note: 'The easiest way to reach me is by email.', cta: 'Send an email' },
} as const;

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!locales.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const t = copy[locale];
  const email = 'exeantos@gmail.com';
  return <section className="inner-page section-shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.a}<br/><span>{t.b}</span></h1><p className="inner-lead">{t.lead}</p><a className="button button-primary" href={`mailto:${email}`}>{t.cta} ↗</a><p className="notice">{t.note} · {email}</p></section>;
}
