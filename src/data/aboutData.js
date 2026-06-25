import photo1 from "../assets/about/developer.jpg";
import photo2 from "../assets/about/team.jpg";
import photo3 from "../assets/about/vr.jpg";
import photo4 from "../assets/about/lenta.jpg";
import photo5 from "../assets/about/student.jpg";
import photo6 from "../assets/about/ski.jpg";
import photo7 from "../assets/about/website.jpg";
import photo8 from "../assets/about/office.jpg";

export const aboutData = {
  title: "Qui suis-je ?",

  description1:
    "Bonjour ! Je m’appelle Daria. Je suis actuellement étudiante de BUT Métiers du Multimédia et de l’Internet à l’IUT de Haguenau, où j’apprends le Développement Web Fullstack 💻",

  description2:
    "Mon parcours dans le domaine de l’IT a commencé en 2019, par la gestion de projets informatiques. C’est en travaillant au plus près des développeurs que j’ai découvert cet univers et que j’ai eu envie d’évoluer vers le développement web. Depuis, je me forme pour me réorienter pleinement dans ce domaine qui me passionne.",

  description3:
    "En dehors de l’informatique, la musique occupe une place importante dans ma vie : j’aime non seulement l’écouter, mais aussi la pratiquer moi-même 🎸🎹 Le ski a aussi une place importante, avec cette sensation d’aller toujours un peu plus haut 🏔️",

  previewText1: "Ex-cheffe de projet — je sais ce que veut le client et ce que peut le code.",
  previewText2: "Résultat : des projets qui répondent à de vrais besoins, pas juste à un cahier des charges.",

  descriptionPhoto1: photo6,
  descriptionPhoto2: photo8,

  photos: [
    {
      id: 1,
      group: "idees",
      src: photo1,
      caption: "Quand l’idée prend forme",
      rotate: -6,
      rounded: "xl",
      className:
        "absolute top-[18%] left-0 w-[17vw] min-w-[130px] max-w-[260px] aspect-[3/4]",
    },
    {
      id: 2,
      group: "curiosite",
      src: photo2,
      caption: "Atelier projet et recherche d’idées",
      rotate: 4,
      rounded: "xl",
      className:
        "absolute top-0 left-[28%] w-[18vw] min-w-[150px] max-w-[310px] aspect-[4/3]",
    },
    {
      id: 3,
      group: "idees",
      src: photo7,
      caption: "Du maquettage à l’intégration",
      rotate: 5,
      rounded: "full",
      className:
        "absolute top-[7%] right-[1%] w-[20vw] min-w-[170px] max-w-[320px] aspect-[4/5]",
    },
    {
      id: 4,
      group: "curiosite",
      src: photo3,
      caption: "En cours de développement d’un jeu VR",
      rotate: -5,
      rounded: "full",
      className:
        "absolute bottom-[8%] left-[7%] w-[16vw] min-w-[140px] max-w-[260px] aspect-square",
    },
    {
      id: 5,
      group: "idees",
      src: photo4,
      caption: "Contribuer à un projet collectif",
      rotate: 4,
      rounded: "md",
      className:
        "absolute bottom-[2%] right-[28%] w-[22vw] min-w-[190px] max-w-[360px] aspect-[4/3]",
    },
    {
      id: 6,
      group: "curiosite",
      src: photo5,
      caption: "Toujours prête à apprendre",
      rotate: -4,
      rounded: "xl",
      className:
        "absolute bottom-[21%] right-[3%] w-[15vw] min-w-[130px] max-w-[240px] aspect-square object-top",
    }
  ],
};