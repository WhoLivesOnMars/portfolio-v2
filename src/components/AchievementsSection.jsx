import { motion } from "framer-motion";
import { achievementData } from "../data/achievementData";

export default function AchievementsSection() {
  return (
    <section className="px-5 sm:px-8 py-16 sm:py-20 max-w-[1400px] mx-auto border-t border-ink/10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-2xl sm:text-3xl font-medium mb-12"
      >
        Réalisations
      </motion.h2>

      <div className="flex flex-col">
        {achievementData.achievements.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid sm:grid-cols-[auto_1fr_auto] gap-6 sm:gap-12 py-8 border-b border-ink/10 items-start"
          >
            <span className="font-display text-4xl sm:text-5xl font-medium text-ink/15 w-10 shrink-0">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-medium">{item.title}</h3>
              <p className="text-ink-soft text-sm mt-2 max-w-xl">{item.details}</p>
            </div>
            <div className="text-right shrink-0">
              <span className="text-sm text-sky font-medium block">{item.date}</span>
              <span className="text-xs text-ink-soft mt-1 block">{item.field}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}