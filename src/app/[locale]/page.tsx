import Link from 'next/link';
import { notFound } from 'next/navigation';
import { dictionaries, locales, type Locale } from '@/lib/i18n/dictionaries';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!locales.includes(rawLocale as Locale)) notFound();
  const locale = rawLocale as Locale;
  const t = dictionaries[locale];

  const focus = [
    { number: '01', title: t.digital, desc: t.digitalDesc, icon: '↗', href: `/${locale}/digital` },
    { number: '02', title: t.tech, desc: t.techDesc, icon: '⌘', href: `/${locale}/tech-gear` },
    { number: '03', title: t.auto, desc: t.autoDesc, icon: '⌁', href: `/${locale}/beyond` },
    { number: '04', title: t.travel, desc: t.travelDesc, icon: '◎', href: `/${locale}/beyond` },
  ];

  return (
    <>
      <section className="hero section-shell">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />{t.eyebrow}</p>
          <h1>{t.headlineA}<br /><span>{t.headlineB}</span></h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href={`/${locale}/projects`}>{t.explore} <span>↗</span></Link>
            <Link className="button button-ghost" href={`/${locale}/contact`}>{t.collaborate}</Link>
          </div>
        </div>
        <div className="hero-visual" role="img" aria-label="Abstract dark technology-inspired visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-core"><span>EX</span><i>01 / CREATE</i></div>
          <div className="visual-coordinate coordinate-a">52°13&apos;N<br />21°00&apos;E</div>
          <div className="visual-coordinate coordinate-b">INDEPENDENT<br />BY DESIGN</div>
          <div className="visual-cross cross-a">+</div><div className="visual-cross cross-b">+</div>
        </div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>01 — 04 / DIGITAL · TECH · AUTO · LIFE</span></div>
      </section>

      <section className="focus-section section-shell">
        <div className="section-heading"><p className="eyebrow">{t.focus}</p><h2>{t.focusTitle}</h2></div>
        <div className="focus-grid">
          {focus.map((item) => <Link href={item.href} className="focus-card" key={item.number}>
            <div className="focus-card-top"><span>{item.number} / 04</span><span className="focus-icon">{item.icon}</span></div>
            <div><h3>{item.title}</h3><p>{item.desc}</p></div>
            <span className="card-arrow">↗</span>
          </Link>)}
        </div>
      </section>

      <section className="work-section section-shell">
        <div className="section-heading work-heading"><div><p className="eyebrow">{t.selected}</p><h2>{t.selectedTitle}</h2></div><Link className="text-link" href={`/${locale}/projects`}>{t.explore} ↗</Link></div>
        <Link href={`/${locale}/projects`} className="featured-project">
          <div className="project-art"><div className="project-art-grid"/><div className="project-art-label">EXEANT / DIGITAL WORKSHOP</div><div className="project-art-mark">E<span>.</span></div><div className="project-art-index">001 — PERSONAL PROJECT</div></div>
          <div className="project-info"><p className="eyebrow">{t.projectLabel}</p><h3>{t.projectTitle}</h3><p>{t.projectDesc}</p><span className="text-link">VIEW PROJECT ↗</span></div>
        </Link>
      </section>

      <section className="contact-band section-shell"><div><p className="eyebrow">OPEN FOR SELECT PROJECTS</p><h2>{t.contactTitle}</h2><p>{t.contactDesc}</p></div><Link className="button button-primary" href={`/${locale}/contact`}>{t.contactCta} <span>↗</span></Link></section>
    </>
  );
}
