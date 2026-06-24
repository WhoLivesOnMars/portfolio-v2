import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const competenceColors = {
  COMPRENDRE: "bg-sky/20 text-sky-800",
  CONCEVOIR: "bg-mint/40 text-green-800",
  EXPRIMER: "bg-accent-soft text-accent",
  DÉVELOPPER: "bg-pale-yellow text-amber-800",
  ENTREPRENDRE: "bg-cream-dark text-ink",
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projets" replace />;

  const allImages = [project.image, ...project.images].filter(Boolean);
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  return (
    <article className="bg-white min-h-screen">
      <div className="px-5 sm:px-8 pt-32 sm:pt-40 pb-16 mx-auto">
        <Link
          to="/projets"
          className="text-sm font-medium text-ink-soft hover:text-ink transition-colors"
        >
          ← Tous les projets
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
          <h1 className="text-2xl text-ink-soft/80 pb-6 tracking-widest font-medium">
            {project.projectName}
          </h1>
          <p className="font-display text-3xl sm:text-4xl lg:text-6xl font-medium leading-[0.95] tracking-tight text-ink max-w-4xl">
            {project.context}
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full aspect-[16/8] overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.projectName}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="px-5 sm:px-8 py-14 max-w-[1200px] mx-auto border-b border-ink/10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          <div>
            <span className="text-xs font-medium text-ink-soft uppercase tracking-widest block mb-3">
              Année
            </span>
            <p className="font-medium text-lg">{project.year}</p>
          </div>
          <div>
            <span className="text-xs font-medium text-ink-soft uppercase tracking-widest block mb-3">
              Catégorie
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.category.map((cat) => (
                <span key={cat} className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream-dark text-ink">
                  {cat}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-ink-soft uppercase tracking-widest block mb-3">
              Technologies
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream-dark text-ink">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium text-ink-soft uppercase tracking-widest block mb-3">
              Compétences
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.competences.map((comp) => (
                <span key={comp} className={`text-xs font-medium px-2.5 py-1 rounded-full ${competenceColors[comp] || "bg-cream-dark text-ink"}`}>
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 py-16 max-w-[1200px] mx-auto border-b border-ink/10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <p className="text-2xl sm:text-3xl font-display font-medium leading-snug text-ink">
              {project.projectDesc}
            </p>
          </div>
          <div>
            <p className="text-lg text-ink-soft leading-relaxed">
              {project.projectDetails}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {project.code && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 rounded-full text-sm font-medium hover:border-ink/60 transition-colors"
                >
                  Voir le code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-ink text-cream px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent transition-colors"
                >
                  Voir la démo →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 sm:px-8 py-16 max-w-[1200px] mx-auto border-b border-ink/10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl sm:text-3xl font-medium pb-10"
        >
          Compétences mobilisées
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {project.competences.map((comp, i) => (
            <motion.div
              key={comp}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`rounded-2xl p-7 ${competenceColors[comp] || "bg-cream-dark"}`}
            >
              <span className="text-xs font-semibold uppercase tracking-widest block mb-4 opacity-60">
                {comp}
              </span>
              <p className="text-sm leading-relaxed">
                {project.competenceDetails?.[comp]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {allImages.length > 1 && (
        <div className="px-5 sm:px-8 py-16 max-w-[1200px] mx-auto border-b border-ink/10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-medium mb-10"
          >
            Visuels du projet
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {allImages.slice(1).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`overflow-hidden rounded-3xl ${
                  allImages.length === 2 ? "sm:col-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${project.projectName} ${i + 2}`}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="px-5 sm:px-8 py-16 max-w-[1200px] mx-auto">
        <Link
          to={`/projets/${nextProject.slug}`}
          className="group flex items-center justify-between"
        >
          <div>
            <p className="text-xs text-ink-soft uppercase tracking-widest pb-3">
              Projet suivant
            </p>
            <h3 className="font-display text-3xl sm:text-5xl font-medium text-ink group-hover:text-accent transition-colors duration-300">
              {nextProject.projectName}
            </h3>
          </div>
          <span className="text-4xl transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}