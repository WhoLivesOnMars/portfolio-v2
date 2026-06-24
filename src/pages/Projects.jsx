import { useState } from "react";
import { motion } from "framer-motion";
import { categories, projectsData } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [active, setActive] = useState("Tous");

  const filtered =
    active === "Tous"
      ? projectsData
      : projectsData.filter((p) => p.category.includes(active));

  return (
    <section className="min-h-screen bg-ink text-cream px-5 sm:px-8 pt-32 sm:pt-40 pb-20">
      <div className="w-full mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-6xl font-medium max-w-2xl text-balance-tight pb-8"
        >
          Tous les projets
        </motion.h1>
        <p className="mt-4 text-cream/50 max-w-lg">
          Une sélection de projets web sur lesquels j'ai travaillé, du
          frontend au backend.
        </p>

        <div className="flex flex-wrap gap-2 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 text-sm font-medium transition-all ${
                active === cat
                  ? "bg-cream text-ink rounded-3xl"
                  : "bg-cream/10 text-cream rounded-md hover:text-cream hover:bg-cream/15"
              }`}
            >
              {active === cat && (
                <span className="mr-1.5">✓</span>
              )}
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-32 mt-12">
          {filtered.map((project, i) => (
            <ProjectCard project={project} index={i} key={project.slug} dark />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-cream/40 mt-12">
            Aucun projet dans cette catégorie pour le moment.
          </p>
        )}
      </div>
    </section>
  );
}