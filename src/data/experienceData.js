import recommendation from '../assets/pdf/Lettre Recommandation Daria KHANINA.pdf'

export const experienceData = {
  title1: "Expérience",
  title2: "professionnelle",
  description: "Des expériences entre gestion de projets, développement web et création de solutions digitales.",
  items: [
    {
      id: 1,
      company: "Ideematic (Développement web & solutions digitales - Strasbourg, France)",
      jobtitle: "Développeuse web — Stagiaire",
      startYear: '2026',
      endYear: 'Présent',
      tags: ["Ruby on Rails", "React", "Docker", "PostgreSQL"]
    },
    {
      id: 2,
      company: 'Hémisphère Web (Webmarketing - Strasbourg, France)',
      jobtitle: 'Développeuse web — Stagiaire',
      startYear: '2025',
      endYear: '2025',
      tags: ["WordPress", "Elementor", "WPBakery", "Yoast SEO"],
      pdf: recommendation
    },
    {
      id: 3,
      company: 'Severstal Infocom (Développement de logiciels informatiques - Saint-Pétersbourg, Russie)',
      jobtitle: 'Chef de projets IT',
      startYear: '2022',
      endYear: '2023',
      tags: ["SAP", "Confluence", "Jira", "Trello"]
    },
    {
      id: 4,
      company: 'Lenta (Grande distribution - Saint-Pétersbourg, Russie)',
      jobtitle: 'Assistante Chef de programme de projets',
      startYear: '2019',
      endYear: '2022',
      tags: ["SAP", "Confluence", "Jira", "Trello"]
    },
    {
      id: 5,
      company: 'Gazprom Neft (Сompagnie pétrolière - Saint-Pétersbourg, Russie)',
      jobtitle: 'Assistante Chef de projets IT',
      startYear: '2018',
      endYear: '2019',
      tags: ["SAP", "PMIS"],
    },
  ]
}