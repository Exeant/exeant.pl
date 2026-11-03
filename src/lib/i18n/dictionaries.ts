export const locales = ['pl', 'en'] as const;
export type Locale = (typeof locales)[number];

export const dictionaries = {
  pl: {
    nav: { digital: 'Digital', projects: 'Projekty', tech: 'Tech & Gear', beyond: 'Poza ekranem', contact: 'Kontakt' },
    eyebrow: 'NIEZALEŻNY TWÓRCA CYFROWY · POLSKA',
    headlineA: 'Ciekawość napędza',
    headlineB: 'tworzenie.',
    intro: 'Tworzę doświadczenia cyfrowe, eksperymentuję z technologią i realizuję pomysły, które nie dają mi spokoju.',
    explore: 'Poznaj projekty',
    collaborate: 'Porozmawiajmy',
    focus: 'OBSZARY, KTÓRE MNIE NAPĘDZAJĄ',
    focusTitle: 'Nie zamykam się w jednej kategorii.',
    digital: 'Digital', digitalDesc: 'Strony internetowe i projekty cyfrowe.',
    tech: 'Tech & DIY', techDesc: 'Elektronika, sprzęt i eksperymenty.',
    auto: 'Automotive', autoDesc: 'JDM, motoryzacja i kultura samochodowa.',
    travel: 'Poza ekranem', travelDesc: 'Podróże, fotografia i wszystko pomiędzy.',
    selected: 'WYBRANE REALIZACJE', selectedTitle: 'Pomysły zamienione w projekty.',
    projectLabel: 'PERSONAL PROJECT · 2026', projectTitle: 'EXEANT — własna przestrzeń cyfrowa',
    projectDesc: 'Projektowanie i rozwój miejsca, które łączy digital, technologię i zainteresowania.',
    contactTitle: 'Masz pomysł? Zbudujmy coś dobrego.',
    contactDesc: 'Szukasz strony dla swojej firmy albo chcesz porozmawiać o projekcie? Napisz.',
    contactCta: 'Przejdź do kontaktu', footer: 'Niezależny projekt. Tworzony z ciekawości.'
  },
  en: {
    nav: { digital: 'Digital', projects: 'Projects', tech: 'Tech & Gear', beyond: 'Beyond', contact: 'Contact' },
    eyebrow: 'INDEPENDENT DIGITAL CREATOR · POLAND',
    headlineA: 'Curiosity drives', headlineB: 'creation.',
    intro: 'I build digital experiences, experiment with technology and bring ideas to life — especially the ones I cannot stop thinking about.',
    explore: 'Explore projects', collaborate: "Let's talk",
    focus: 'WHAT DRIVES ME', focusTitle: "I don't fit into just one category.",
    digital: 'Digital', digitalDesc: 'Websites and digital projects.',
    tech: 'Tech & DIY', techDesc: 'Electronics, gear and experiments.',
    auto: 'Automotive', autoDesc: 'JDM, cars and automotive culture.',
    travel: 'Beyond', travelDesc: 'Travel, photography and everything in between.',
    selected: 'SELECTED WORK', selectedTitle: 'Ideas turned into projects.',
    projectLabel: 'PERSONAL PROJECT · 2026', projectTitle: 'EXEANT — a digital space of my own',
    projectDesc: 'Designing and building a place where digital, technology and personal interests meet.',
    contactTitle: "Have an idea? Let's build something good.",
    contactDesc: 'Need a website for your business or want to discuss a project? Get in touch.',
    contactCta: 'Get in touch', footer: 'An independent project. Built out of curiosity.'
  }
} as const;
