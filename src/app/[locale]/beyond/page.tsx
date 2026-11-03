import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/dictionaries';
const copy = {
 pl:{eyebrow:'04 / POZA EKRANEM',a:'Więcej niż',b:'świat digitalu.',lead:'Japońska motoryzacja, podróże w ciepłe miejsca, fotografia i chwile poza ekranem. Pasje, które inspirują i nadają projektom charakter.',tag:'ROAD / TRAVEL / STORIES',title:'Historie spoza ekranu.',desc:'Galerie, trasy i relacje będą dodawane stopniowo.'},
 en:{eyebrow:'04 / BEYOND',a:'More than',b:'the digital world.',lead:'JDM culture, travel to warmer places, photography and moments away from the screen. Interests that inspire and give projects their character.',tag:'ROAD / TRAVEL / STORIES',title:'Stories beyond the screen.',desc:'Photo stories, routes and travel notes will be added over time.'}
} as const;
export default async function BeyondPage({params}:{params:Promise<{locale:string}>}) { const {locale:raw}=await params; if(!locales.includes(raw as Locale)) notFound(); const t=copy[raw as Locale]; return <section className="inner-page section-shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.a}<br/><span>{t.b}</span></h1><p className="inner-lead">{t.lead}</p><div className="empty-state"><span>{t.tag}</span><h2>{t.title}</h2><p>{t.desc}</p></div></section>; }
