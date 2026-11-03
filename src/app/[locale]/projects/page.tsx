import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/dictionaries';
const copy = {
 pl:{eyebrow:'02 / WYBRANE PROJEKTY',a:'Pomysły zamienione',b:'w projekty.',lead:'Miejsce na realizacje komercyjne, projekty osobiste i eksperymenty. Projekty koncepcyjne będą wyraźnie oznaczane.',tag:'ARCHIWUM PROJEKTÓW / 2026',title:'Pierwsze projekty są w drodze.',desc:'Wkrótce pojawią się tu wybrane realizacje i eksperymenty.'},
 en:{eyebrow:'02 / SELECTED WORK',a:'Ideas turned into',b:'real projects.',lead:'A collection of client work, personal projects and experiments. Concept projects will always be clearly labelled.',tag:'PROJECT ARCHIVE / 2026',title:'First projects are taking shape.',desc:'Selected work and experiments will appear here soon.'}
} as const;
export default async function ProjectsPage({params}:{params:Promise<{locale:string}>}) { const {locale:raw}=await params; if(!locales.includes(raw as Locale)) notFound(); const t=copy[raw as Locale]; return <section className="inner-page section-shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.a}<br/><span>{t.b}</span></h1><p className="inner-lead">{t.lead}</p><div className="empty-state"><span>{t.tag}</span><h2>{t.title}</h2><p>{t.desc}</p></div></section>; }
