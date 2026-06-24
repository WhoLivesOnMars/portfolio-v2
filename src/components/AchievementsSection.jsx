import { motion } from "framer-motion";
import { achievementData } from "../data/achievementData";

const borderColors = ["border-deep-light", "border-accent-soft"];

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CertIcon({ badge }) {
  if (badge === "opquast") {
    return (
      <img
        src="https://api.opquast.com/badge/RZ41HW.svg"
        alt="Opquast"
        className="h-12 w-auto"
      />
    );
  }
  if (badge === "pix") {
    return (
      <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
        <svg viewBox="0 0 100 115" className="absolute inset-0 w-full h-full" fill="none">
          <polygon
            points="50,2 98,27 98,88 50,113 2,88 2,27"
            fill="#fff1d6"
            stroke="#fbbf24"
            strokeWidth="5"
          />
        </svg>
        <div className="relative z-10 flex flex-col items-center leading-none">
          <span className="text-[6px] font-bold text-ink/50 uppercase tracking-widest">pix</span>
          <span className="text-sm font-black text-deep">528</span>
        </div>
      </div>
    );
  }
  return null;
}

export default function AchievementsSection() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-[1400px] mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-medium leading-tight text-ink pb-12 text-right"
      >
        Certifications
      </motion.h2>

      <div className="flex flex-col gap-4">
        {achievementData.achievements.map((item, i) => {
          const borderColor = borderColors[i % 2];

          const inner = (
            <div className={`flex items-center gap-6 pl-6 py-5 border-l-4 ${borderColor} group-hover:pl-8 transition-all duration-300`}>
              {item.badge && (
                <div className="shrink-0">
                  <CertIcon badge={item.badge} />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl sm:text-2xl font-medium leading-snug">
                  {item.title}
                  {item.level && (
                    <span className="ml-2 text-base font-sans font-normal text-ink/40">
                      · {item.level}
                    </span>
                  )}
                </h3>
                <p className="text-sm text-ink-soft mt-1">{item.details}</p>
              </div>
              <div className="shrink-0 text-right flex flex-col items-end gap-1">
                <span className="hidden sm:block text-xs text-ink/40 font-medium">{item.field}</span>
                <span className="text-sm text-ink/40">{item.date}</span>
                {item.link && (
                  <span className="text-ink/30 group-hover:text-accent transition-colors duration-300 mt-1">
                    <LinkIcon />
                  </span>
                )}
              </div>
            </div>
          );

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {inner}
                </a>
              ) : (
                <div className="group">{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}