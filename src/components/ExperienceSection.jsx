import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experienceData } from "../data/experienceData";

export default function ExperienceSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const dotY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={sectionRef} className="bg-white px-5 sm:px-8 py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 flex flex-col gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl font-medium leading-tight text-ink"
          >
            {experienceData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-xl text-lg sm:text-xl leading-relaxed text-ink-soft"
          >
            {experienceData.description}
          </motion.p>
        </div>

        <div className="relative flex gap-8 lg:gap-12">
          <div className="hidden lg:block relative flex-shrink-0 w-3">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-ink/10" />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-accent origin-top"
              style={{ scaleY: lineScaleY }}
            />
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-white"
              style={{ top: dotY }}
            />
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {experienceData.items.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`w-full lg:max-w-5xl ${index % 2 === 1 ? "lg:ml-14" : ""}`}
              >
                <article className="
                  relative overflow-hidden
                  rounded-[2rem] bg-accent-soft p-6 sm:p-8
                  flex flex-col gap-4
                  lg:flex-row lg:items-center lg:justify-between
                  transition-colors duration-300 hover:bg-accent-soft/70
                ">
                  <svg
                    className="absolute -right-6 -bottom-8 w-48 h-48 text-ink/5 select-none pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-10-2h4v2h-4V5zm10 15H4V9h16v11z"/>
                  </svg>

                  <div className="relative z-10">
                    <div className="mb-3 inline-flex rounded-full bg-deep-light px-4 py-1 text-sm font-medium text-white">
                      {exp.startYear} — {exp.endYear}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.04em] text-ink">
                      {exp.jobtitle}
                    </h3>

                    <p className="mt-2 max-w-3xl text-base sm:text-lg leading-relaxed text-ink-soft">
                      {exp.company}
                    </p>

                    {exp.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full bg-white/60 text-xs font-medium text-ink-soft"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {exp.pdf && (
                    <a
                      href={exp.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        relative z-10
                        inline-flex w-fit items-center gap-2
                        rounded-full bg-accent px-5 py-3
                        text-sm font-semibold text-white
                        transition-transform duration-300 
                        hover:-translate-y-1
                      "
                    >
                      Recommandation
                      <span>→</span>
                    </a>
                  )}
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}