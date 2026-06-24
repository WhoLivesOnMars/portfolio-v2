import { carouselImages } from "../data/carouselData";
import { Player } from "@lottiefiles/react-lottie-player";

const sizeMap = {
  sm: "w-40 sm:w-52",
  md: "w-52 sm:w-64",
  lg: "w-64 sm:w-80",
  wide: "w-72 sm:w-96",
  tall: "w-36 sm:w-44",
};

const shiftMap = {
  normal: "",
  up: "-translate-y-4",
  upLarge: "-translate-y-8",
  down: "translate-y-4",
  downLarge: "translate-y-8",
};

const aspectMap = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[3/2]",
  wide: "aspect-[2/1]",
};

const roundedMap = {
  full: "rounded-full",
  xl: "rounded-[2rem]",
  md: "rounded-2xl",
  sm: "rounded-xl",
  none: "rounded-lg",
};

function Tile({ image }) {
  const aspect = image.lottie
    ? "aspect-square"
    : (aspectMap[image.aspect] || "aspect-[4/5]");

  const rounded = roundedMap[image.rounded] || "rounded-2xl";

  return (
    <div className={`${shiftMap[image.shift] || ""} flex items-center`}>
      <div
        className={`
          ${sizeMap[image.size]}
          ${aspect}
          ${rounded}
          ${image.lottie ? "bg-transparent" : "shadow-lg overflow-hidden"}
        `}
        style={{ transform: `rotate(${image.rotate}deg)` }}
      >
        {image.lottie ? (
          <Player autoplay loop src={image.lottie} className="w-full h-full" />
        ) : (
          <img
            src={image.src}
            alt=""
            className={`w-full h-full object-cover ${rounded}`}
          />
        )}
      </div>
    </div>
  );
}

export default function ImageCarousel() {
  const loopImages = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <div className="relative w-full overflow-hidden py-12">
      <div
        className="carousel-track grid grid-flow-col auto-cols-max w-max items-center"
        style={{ gridTemplateRows: "repeat(3, 16.25rem)", gap: "1rem" }}
      >
        {loopImages.map((image, i) => (
          <Tile image={image} key={`${image.id}-${i}`} />
        ))}
      </div>
    </div>
  );
}