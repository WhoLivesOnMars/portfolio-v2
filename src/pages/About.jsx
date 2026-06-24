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

function PhotoCollage({ activeKey }) {
  return (
    <div className="absolute inset-0">
      {aboutData.photos.map((photo) => {
        const isActive = activeKey === photo.group;
        const isMuted = activeKey && activeKey !== photo.group;
        const hasHover = activeKey !== null;

        return (
          <div
            key={photo.id}
            className={`
              ${photo.className}
              transition-opacity duration-300
              ${isActive ? "opacity-100 z-20" : ""}
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
              {photo.src ? (
                <img
                  src={photo.src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              ) : (
                <div className="h-full w-full bg-white/25" />
              )}
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

export default function About() {
  const [activeKey, setActiveKey] = useState(null);
  const [isWhite, setIsWhite] = useState(false);
  const heroRef = useRef(null);

  const photos = aboutData.photos;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsWhite(latest > 0.35);
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
          <div className="relative h-screen xl:h-[1000px] 2xl:h-[1400px]">
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

        <div className="hidden sm:flex absolute inset-0 z-30 justify-center px-5 pt-[300px] 2xl:pt-[500px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`
              max-w-4xl xl:max-w-5xl
              text-center font-display
              text-4xl sm:text-5xl lg:text-6xl
              font-medium
              transition-colors duration-300
              ${isWhite ? "text-ink/80" : "text-white/75"}
            `}
          >
            Développeuse full-stack,
            <br />
            <Highlight target="curiosite" setActiveKey={setActiveKey} isWhite={isWhite}>
              polyvalente et curieuse
            </Highlight>
            ,
            <br />
            <span className="2xl:hidden">
              avec l'envie de
              <br />
            </span>
            <span className="hidden 2xl:inline">avec l'envie de </span>
            <Highlight target="idees" setActiveKey={setActiveKey} isWhite={isWhite}>
              donner vie aux idées
            </Highlight>
            .
          </motion.h1>
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
                <p>{aboutData.description1}</p>
                <p>{aboutData.description2}</p>
                <p>{aboutData.description3}</p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-32 items-start justify-end"
            >
              <img
                src={aboutData.descriptionPhoto}
                alt=""
                className="
                  w-full lg:w-[30%] lg:mt-48
                  aspect-[4/5] object-cover
                  rounded-[5rem]
                "
              />
              <img
                src={photos[2].src}
                alt=""
                className="
                  w-full lg:w-[40%]
                  aspect-[1] object-cover
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