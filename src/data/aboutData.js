import photo1 from "../assets-optimized/about/developer.webp";
import photo2 from "../assets-optimized/about/team.webp";
import photo3 from "../assets-optimized/about/vr.webp";
import photo5 from "../assets-optimized/about/student.webp";
import photo6 from "../assets-optimized/about/ski.webp";
import photo7 from "../assets-optimized/about/website.webp";
import photo8 from "../assets-optimized/about/office.webp";

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
        "absolute top-[18%] left-0 w-[14vw] min-w-[110px] max-w-[220px] aspect-[3/4]",
    },
    {
      id: 2,
      group: "curiosite",
      src: photo2,
      caption: "Atelier projet et recherche d’idées",
      rotate: -4,
      rounded: "xl",
      className:
        "absolute top-[1%] left-[17%] w-[14vw] min-w-[110px] max-w-[240px] aspect-[4/3]",
    },
    {
      id: 3,
      group: "idees",
      src: photo7,
      caption: "Du maquettage à l’intégration",
      rotate: 5,
      rounded: "full",
      className:
        "absolute top-[17%] right-[1%] w-[16vw] min-w-[130px] max-w-[250px] aspect-[4/5]",
    },
    {
      id: 4,
      group: "curiosite",
      src: photo3,
      caption: "En cours de développement d’un jeu VR",
      rotate: 5,
      rounded: "full",
      className:
        "absolute bottom-[1%] left-[7%] w-[14vw] min-w-[120px] max-w-[220px] aspect-square",
    },
    {
      id: 6,
      group: "curiosite",
      src: photo5,
      caption: "Toujours prête à apprendre",
      rotate: -4,
      rounded: "xl",
      className:
        "absolute bottom-[2%] right-[11%] w-[15vw] min-w-[130px] max-w-[240px] aspect-square object-top",
    }
  ],
};