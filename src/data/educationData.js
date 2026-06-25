import illustration1 from "../assets-optimized/illustrations/edu1.webp";
import illustration2 from "../assets-optimized/illustrations/edu2.webp";
import illustration3 from "../assets-optimized/illustrations/edu3.webp";

export const educationData = {
  title: "Formation",
  description: "Un parcours construit entre multimédia, développement web et gestion de projets.",
  items: [
    {
      id: 1,
      illustration: illustration3,
      institution: "IUT de Haguenau",
      course: "BUT : Métiers du multimédia et de l'internet - Développement Web, BAC + 3",
      startYear: "2024",
      endYear: "Présent",
    },
    {
      id: 2,
      illustration: illustration2,
      institution: "Yandex Practicum (Moscou, Russie)",
      course: "Cours en ligne de reconversion professionnelle en Développement Web",
      startYear: "2022",
      endYear: "2023",
    },
    {
      id: 3,
      illustration: illustration1,
      institution: "Université fédérale de l'Oural (Ekaterinbourg, Russie)",
      course: "Master en gestion - Management international",
      startYear: "2015",
      endYear: "2017",
    },
  ],
};