import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/skillsData";
import { skillsImage } from "../utils/skillsImage";

const icons = [
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 21h8M12 18v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
      stroke="currentColor"
      strokeWidth="1.6"
    />
  </svg>,
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M14.7 6.3a1 1 0 0 1 1.4 0l1.6 1.6a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-1.6-1.6a1 1 0 0 1 0-1.4l8-8Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path d="M5 19l1-3 2 2-3 1Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>,
];

function SkillIcon({ name }) {
  const [hovered, setHovered] = useState(false);
  const icon = skillsImage(name.toLowerCase());

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-12 h-12 rounded-xl bg-sky/10 hover:bg-accent-soft/20 transition-colors duration-200 flex items-center justify-center p-2.5 cursor-default">
        {icon ? (
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-contain"
          />
        ) : (
          <span className="text-[10px] font-medium text-center leading-tight">
            {name}
          </span>
        )}
      </div>

      {hovered && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-ink text-cream text-xs font-medium px-3 py-1.5 rounded-full whitespace-nowrap z-10 pointer-events-none">
          {name}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28 pt-18 sm:pb-25 bg-sage rounded-[2.5rem] sm:rounded-[3rem] max-w-[1400px] mx-auto my-30">
      <div className="px-2 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-ink text-right ml-auto max-w-xl"
        >
          <h2 className="text-4xl sm:text-6xl font-medium leading-tight text-ink">
            Compétences
          </h2>
          <p className="max-w-xl text-lg sm:text-xl leading-relaxed text-ink-soft">
            Les outils avec lesquels je construis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {skillsData.map((cat, i) => {
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-3xl px-7 py-18 bg-white text-ink"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center flex-shrink-0">
                    {icons[i]}
                  </div>
                  <h3 className="font-display text-xl font-medium">
                    {cat.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill) => (
                    <SkillIcon key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}