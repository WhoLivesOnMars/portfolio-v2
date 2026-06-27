import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { aboutData } from "../data/aboutData";
import Skills from "../components/Skills";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import AchievementsSection from "../components/AchievementsSection";

const roundedMap = {
  full: "rounded-full",
  xl: "rounded-[2rem]",
  md: "rounded-2xl",
  sm: "rounded-xl",
};

const startPositions = [
  { x: -260, y: -180, rotate: -18 },
  { x: 180, y: -220, rotate: 16 },
  { x: 260, y: 160, rotate: 22 },
  { x: -220, y: 220, rotate: -20 },
  { x: 160, y: 240, rotate: 14 },
];

function PhotoCollage({ activeKey }) {
  return (
    <div className="absolute inset-0">
      {aboutData.photos.map((photo, index) => {
        const isActive = activeKey === photo.group;
        const isMuted = activeKey && activeKey !== photo.group;
        const hasHover = activeKey !== null;
        const start = startPositions[index % startPositions.length];

        return (
          <motion.div
            key={photo.id}
            initial={{
              x: start.x,
              y: start.y,
              rotate: start.rotate,
              scale: 0.85,
            }}
            animate={{
              x: [start.x, start.x * -0.35, start.x * 0.15, 0],
              y: [start.y, start.y * -0.25, start.y * 0.12, 0],
              rotate: [start.rotate, start.rotate * -0.6, start.rotate * 0.25, 0],
              scale: [0.85, 1.05, 0.96, 1],
            }}
            transition={{
              duration: 1.6,
              delay: index * 0.12,
              ease: "easeOut",
            }}
            className={`
              ${photo.className}
              ${isActive ? "z-20" : ""}
            `}
          >
            <div
              className={`
                h-full w-full
                transition-opacity duration-300
                ${isActive ? "opacity-100" : ""}
                ${isMuted ? "opacity-30" : ""}
                ${!hasHover ? "opacity-100" : ""}
              `}
            >
              <div
                className={`
                  h-full w-full
                  ${roundedMap[photo.rounded]}
                  overflow-hidden bg-white/20
                `}
                style={{ transform: `rotate(${photo.rotate}deg)` }}
              >
                <img
                  src={photo.src}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>

              <p
                className={`
                  mt-3 pt-4 max-w-full text-center text-xs sm:text-sm font-medium leading-snug text-white
                  transition-opacity duration-300
                  ${isActive ? "opacity-100" : "opacity-0"}
                `}
                style={{ transform: `rotate(${photo.rotate}deg)` }}
              >
                {photo.caption}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

function Highlight({ children, target, setActiveKey, isWhite }) {
  return (
    <span
      onMouseEnter={() => setActiveKey(target)}
      onMouseLeave={() => setActiveKey(null)}
      className={`
        cursor-default font-semibold
        transition-colors duration-300
        ${isWhite ? "text-ink" : "text-white"}
      `}
    >
      {children}
    </span>
  );
}

function Marker({ children }) {
  return (
    <span className="bg-gradient-to-t from-sage/70 from-45% to-transparent to-45% px-1 box-decoration-clone">
      {children}
    </span>
  );
}

function RichText({ parts }) {
  return (
    <>
      {parts.map((part, index) =>
        part.highlight ? (
          <Marker key={index}>{part.text}</Marker>
        ) : (
          <span key={index}>{part.text}</span>
        )
      )}
    </>
  );
}

export default function About() {
  const [activeKey, setActiveKey] = useState(null);
  const [isWhite, setIsWhite] = useState(false);
  const heroRef = useRef(null);

  const photos = aboutData.photos;

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsWhite(latest > 1);
  });

  return (
    <div>
      <section
        ref={heroRef}
        className={`
          relative overflow-hidden
          transition-colors duration-300
          ${isWhite ? "bg-white" : "bg-sky"}
        `}
      >
        <div className="hidden sm:block overflow-hidden">
          <div className="relative h-screen">
            <PhotoCollage activeKey={activeKey} isWhite={isWhite} />
          </div>
        </div>

        <div className="sm:hidden flex flex-col">
          <div className="w-full h-64 overflow-hidden">
            <img
              src={photos[0].src}
              alt=""
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="px-5 py-16 flex items-center justify-center">
            <h1
              className={`
                text-center font-display text-4xl font-medium
                ${isWhite ? "text-ink" : "text-white"}
              `}
            >
              Développeuse full-stack,
              <br />
              <span className="font-semibold">polyvalente et curieuse</span>,
              <br />
              avec l'envie de{" "}
              <span className="font-semibold">donner vie aux idées</span>.
            </h1>
          </div>
        </div>

        <div className="hidden sm:flex absolute inset-0 z-30 items-center justify-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`
              max-w-4xl xl:max-w-5xl
              text-center font-display
              text-4xl sm:text-5xl
              font-medium
              transition-colors duration-300
              ${isWhite ? "text-ink/80" : "text-white/75"}
            `}
          >
            Développeuse d’applications web,
            <br />
            mobiles et immersives —
            <br />
            entre{" "}
            <Highlight target="curiosite" setActiveKey={setActiveKey} isWhite={isWhite}>
              culture projet
            </Highlight>
            <br />
            et{" "}
            <Highlight target="idees" setActiveKey={setActiveKey} isWhite={isWhite}>
              réalisation technique
            </Highlight>
            .
          </motion.h1>
        </div>
        <div className="hidden sm:flex absolute bottom-8 left-1/2 z-40 -translate-x-1/2 flex-col items-center gap-1">
          <span className="block h-[18px] w-[18px] border-r-[3px] border-b-[3px] border-white opacity-70 animate-scrollArrow"></span>
          <span
            className="block h-[18px] w-[18px] border-r-[3px] border-b-[3px] border-white opacity-70 animate-scrollArrow"
            style={{ animationDelay: "0.2s" }}
          ></span>        
        </div>
      </section>

      <div className="bg-white">
        <section className="px-5 sm:px-8 py-20 sm:py-28 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl sm:text-6xl font-medium leading-tight text-ink"
              >
                {aboutData.title}
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col gap-7 text-lg sm:text-xl text-ink-soft leading-relaxed max-w-3xl"
              >
                <p>
                  <RichText parts={aboutData.description1} />
                </p>
                <p>
                  <RichText parts={aboutData.description2} />
                </p>
                <p>
                  <RichText parts={aboutData.description3} />
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-15 items-start justify-end"
            >
              <img
                src={aboutData.descriptionPhoto1}
                alt=""
                className="
                  w-full lg:w-[30%] lg:mt-35
                  aspect-[4/5] object-cover
                  rounded-[5rem]
                "
              />
              <img
                src={aboutData.descriptionPhoto2}
                alt=""
                className="
                  w-full lg:w-[25%]
                  aspect-[4/5] object-cover
                  rounded-[2rem]
                "
              />
            </motion.div>
          </div>
        </section>

        <Skills />
        <EducationSection />
        <ExperienceSection />
        <AchievementsSection />
      </div>
    </div>
  );
}