import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { skillsData } from "../data/skillsData";

const toolsByService = [
  skillsData[0].items.slice(0, 6),
  skillsData[1].items.slice(0, 6),
  skillsData[2].items.slice(0, 6),
];

export default function Services() {
  return (
    <section className="px-5 sm:px-8 pt-32 sm:pt-40 pb-20">
      <div className="max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl sm:text-6xl font-medium max-w-2xl text-balance-tight"
        >
          Ce que je fais.
        </motion.h1>
        <p className="mt-4 text-ink-soft max-w-lg">
          Trois façons de travailler ensemble, selon les besoins de votre
          projet.
        </p>

        <div className="flex flex-col gap-6 mt-14">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`rounded-3xl p-8 sm:p-10 ${service.color.includes("bg-deep") ? service.color : `${service.color} text-ink`}`}
            >
              <div className="grid sm:grid-cols-3 gap-8">
                <div className="sm:col-span-2">
                  <span className="text-sm font-medium opacity-60">
                    0{i + 1}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-medium mt-2 mb-4">
                    {service.title}
                  </h2>
                  <p className="opacity-80 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium opacity-60 uppercase tracking-wide">
                    Avec
                  </span>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {toolsByService[i % toolsByService.length].map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-medium px-3 py-1.5 rounded-full bg-current/10"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-cream-dark rounded-3xl p-8 sm:p-10"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-medium max-w-md text-balance-tight">
            Un projet en tête&nbsp;? Discutons-en.
          </h2>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 rounded-full text-[15px] font-medium hover:bg-accent transition-colors"
          >
            Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  );
}