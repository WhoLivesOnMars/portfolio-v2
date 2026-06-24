import animation1 from "../assets/carousel/animations/space.json";
import animation2 from "../assets/carousel/animations/uiux.json";
import animation3 from "../assets/carousel/animations/rocket.json";
import animation4 from "../assets/carousel/animations/card.json";
import image1 from "../assets/carousel/images/code.jpg";
import image2 from "../assets/carousel/images/mouse.png";
import image3 from "../assets/carousel/images/tablet.jpg";
import image4 from "../assets/carousel/images/wireframes.jpg";
import image5 from "../assets/carousel/images/laptop.jpg";
import image6 from "../assets/carousel/images/screen.png";
import image7 from "../assets/carousel/images/site.jpg";
import image8 from "../assets/carousel/images/table.png";
import image9 from "../assets/carousel/images/work.jpg";

export const carouselImages = [
  { id: 1, src: image1, rotate: -6, size: "wide", aspect: "landscape", shift: "up", rounded: "sm" },
  { id: 2, src: image9, rotate: 3, size: "sm", aspect: "landscape", shift: "normal", rounded: "sm" },
  { id: 3, src: image3, rotate: -2, size: "md", aspect: "portrait", shift: "normal", rounded: "full" },
  { id: 4, lottie: animation4, rotate: 5, size: "sm", shift: "up", rounded: "md" },
  { id: 5, src: image7, rotate: -4, size: "lg", aspect: "landscape", shift: "up", rounded: "sm" },
  { id: 6, src: image8, rotate: 2, size: "md", aspect: "square", shift: "up", rounded: "xl" },
  { id: 7, src: image6, rotate: -5, size: "sm", aspect: "landscape", shift: "normal", rounded: "xl" },
  { id: 8, src: image5, rotate: 7, size: "sm", aspect: "portrait", shift: "down", rounded: "sm" },
  { id: 9, lottie: animation3, rotate: -5, size: "md", shift: "up", rounded: "xl" },
  { id: 10, src: image2, rotate: 4, size: "sm", aspect: "square", shift: "down", rounded: "full" },
  { id: 11, lottie: animation2, rotate: 3,  size: "md", shift: "down", rounded: "full" },
  { id: 12, src: image4, rotate: 6, size: "wide", aspect: "landscape", shift: "up", rounded: "xl" },
  { id: 13, lottie: animation1, rotate: -7, size: "md", shift: "down", rounded: "xl" },
];