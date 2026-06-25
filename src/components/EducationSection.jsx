import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { educationData } from "../data/educationData";
import illustration from "../assets-optimized/illustrations/work2.webp";

const chronological = [...educationData.items].reverse();

const cardColors = [
  { bg: "bg-mint", text: "text-ink", sub: "text-ink-soft", badge: "bg-deep-light text-cream" },
  { bg: "bg-sky", text: "text-white", sub: "text-white/80", badge: "bg-deep-light text-cream" },
  { bg: "bg-accent", text: "text-white", sub: "text-white/80", badge: "bg-cream text-ink" },
];

const illustrationPositions = [
  "bottom-0 right-0 translate-y-1/3 translate-x-1/4",
  "top-0 right-0 -translate-y-1/3 translate-x-1/4",
  "bottom-0 right-0 translate-y-1/3 translate-x-1/4",
];

const PATH_D = "M 27 5 C 27 28, 73 28, 73 50 C 73 72, 27 72, 27 95";

export default function EducationSection() {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  const dashOffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0]
  );

  const planeProgress = useTransform(
    scrollYProgress,
    [0, 1],
    [0, pathLength]
  );

  return (
    <section ref={sectionRef} className="relative bg-pale-yellow px-5 sm:px-8 py-20 sm:py-28">
      <img
        src={illustration}
        alt=""
        className="hidden sm:block absolute -top-24 right-16 sm:right-24 w-96 sm:w-[32rem] z-10 pointer-events-none"
      />
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-6xl font-medium leading-tight text-ink"
          >
            {educationData.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg sm:text-xl leading-relaxed text-ink-soft"
          >
            {educationData.description}
          </motion.p>
        </div>

        <div className="relative w-full lg:max-w-5xl mx-auto">
          <div className="absolute inset-0 hidden sm:block pointer-events-none z-20">
            <MotionPlaneAndPath
              pathD={PATH_D}
              pathRef={pathRef}
              pathLength={pathLength}
              dashOffset={dashOffset}
              planeProgress={planeProgress}
            />
          </div>
          <div className="flex flex-col gap-32">
            {chronological.map((edu, index) => {
              const color = cardColors[index % cardColors.length];
              const isRight = index % 2 === 1;

              return (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`w-full sm:w-[40%] ${isRight ? "sm:ml-auto" : "sm:mr-auto"}`}
                >
                  <div className={`relative rounded-[2rem] p-7 sm:p-10 ${color.bg}`}>
                    {edu.illustration && (
                      <img
                        src={edu.illustration}
                        alt=""
                        className={`absolute w-24 sm:w-37 pointer-events-none z-10 ${illustrationPositions[index % illustrationPositions.length]}`}
                      />
                    )}
                    <span className={`inline-flex rounded-full px-4 py-1 text-sm font-medium mb-6 ${color.badge}`}>
                      {edu.startYear} — {edu.endYear}
                    </span>
                    <h3 className={`font-display text-2xl sm:text-3xl pb-3 font-medium tracking-tight ${color.text}`}>
                      {edu.institution}
                    </h3>
                    <p className={`mt-4 text-base sm:text-lg leading-relaxed ${color.sub}`}>
                      {edu.course}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MotionPlaneAndPath({ pathD, pathRef, pathLength, planeProgress }) {
  const planeRef = useRef(null);

  useEffect(() => {
    if (!pathRef.current || !planeRef.current) return;

    const unsubscribe = planeProgress.on("change", (value) => {
      const path = pathRef.current;
      if (!path) return;

      const point = path.getPointAtLength(value);
      const nextPoint = path.getPointAtLength(Math.min(value + 1, pathLength));

      const angle = Math.atan2(
        nextPoint.y - point.y,
        nextPoint.x - point.x
      ) * (180 / Math.PI);

      if (planeRef.current) {
        planeRef.current.setAttribute(
          "transform",
          `translate(${point.x}, ${point.y}) rotate(${angle})`
        );
      }
    });

    return unsubscribe;
  }, [planeProgress, pathLength]);

  return (
    <svg
      className="absolute inset-0 w-full h-full z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        ref={pathRef}
        d={pathD}
        fill="none"
        stroke="none"
      />
      <g ref={planeRef}>
        <path
            d="M 5 0 L -3 -3 L -1.5 0 L -3 3 Z"
            fill="white"
            stroke="#16161a"
            strokeWidth="0.25"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
        />
        <path
            d="M -1.5 0 L -3 -3 L -0.5 -1 Z"
            fill="#e8e8e8"
            stroke="#16161a"
            strokeWidth="0.2"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}