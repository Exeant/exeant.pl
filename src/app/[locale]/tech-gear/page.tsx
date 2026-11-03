import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n/dictionaries';
const copy = {
 pl:{eyebrow:'03 / TECH & DIY',a:'Ciekawość',b:'w każdym układzie.',lead:'Elektronika, mikrokontrolery, sprzęt i małe eksperymenty. Miejsce na rzeczy, które warto rozebrać, sprawdzić i zrozumieć.',tag:'WORKBENCH / OPEN',title:'Warsztat jest otwarty.',desc:'Projekty DIY, IoT, testy sprzętu i notatki technologiczne pojawią się tutaj wkrótce.'},
 en:{eyebrow:'03 / TECH & DIY',a:'Curiosity in',b:'every circuit.',lead:'Electronics, microcontrollers, gear and small experiments. A place for things worth taking apart, testing and understanding.',tag:'WORKBENCH / OPEN',title:'The workbench is open.',desc:'DIY projects, IoT builds, gear tests and tech notes will show up here soon.'}
} as const;
export default async function TechGearPage({params}:{params:Promise<{locale:string}>}) { const {locale:raw}=await params; if(!locales.includes(raw as Locale)) notFound(); const t=copy[raw as Locale]; return <section className="inner-page section-shell"><p className="eyebrow">{t.eyebrow}</p><h1>{t.a}<br/><span>{t.b}</span></h1><p className="inner-lead">{t.lead}</p><div className="empty-state"><span>{t.tag}</span><h2>{t.title}</h2><p>{t.desc}</p></div></section>; }
