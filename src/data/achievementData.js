import pixPdf from '../assets/pdf/certification-pix-20260624.pdf'

export const achievementData = {
  bio: "Il faut viser la lune, parce qu'au moins, si vous échouez, vous finirez dans les étoiles. — Oscar Wilde",
  achievements: [
    {
      id: 1,
      title: "Opquast",
      details: "Certification qualité web — 800 points. Bonnes pratiques pour améliorer la qualité, l'accessibilité et l'expérience utilisateur.",
      date: "2026",
      field: "Qualité web",
      link: "https://directory.opquast.com/fr/certificat/RZ41HW/",
      badge: "opquast",
      level: "Avancé",
    },
    {
      id: 2,
      title: "Pix",
      details: "Certification des compétences numériques — 528 points certifiés.",
      date: "2026",
      field: "Compétences numériques",
      link: pixPdf,
      badge: "pix",
      pixScore: 528,
      level: "Avancé 1",
    },
    {
      id: 3,
      title: "Développeur web",
      details: "Formation Yandex Practicum, axée sur le développement front-end et back-end avec projets pratiques",
      date: "Décembre 2023",
      field: "Développement web",
    },
    {
      id: 4,
      title: "Gestion de programmes (PMI)",
      details: "Masterclass animée par A.N. Pavlov, sur la gestion de programmes selon le standard PMI",
      date: "Mai 2021",
      field: "Gestion de projet",
    },
    {
      id: 5,
      title: "Travail en équipe flexible",
      details: "Atelier par BI TO BE, axé sur le travail collaboratif et les approches flexibles en gestion d'équipe.",
      date: "Août 2019",
      field: "Soft Skills",
    },
    {
      id: 6,
      title: "Scrum — Utilisation pratique",
      details: "Formation Luxoft sur l'application de la méthodologie Scrum.",
      date: "Mai 2019",
      field: "Méthodologies agiles",
    },
  ],
};
