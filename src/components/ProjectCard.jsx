import { Link } from "react-router-dom";

export default function ProjectCard({ project, dark = false }) {
  return (
    <Link to={`/projets/${project.slug}`} className="group block w-full">
      <div
        className={`relative h-[400px] sm:h-[450px] lg:h-[620px] 2xl:h-[550px] w-full overflow-hidden rounded-[1.8rem] ${
          dark ? "bg-cream/10" : "bg-cream-dark"
        }`}
      >
        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/25 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <img
          src={project.image}
          alt={project.projectName}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="mt-4">
        <h3 className={`font-sans text-2xl font-semibold pb-3 pt-4 tracking-[-0.04em] ${
          dark ? "text-cream" : "text-ink"
        }`}>
          {project.projectName}
        </h3>

        <p className={`mt-1 max-w-[90%] text-md leading-relaxed line-clamp-3 ${
          dark ? "text-cream/50" : "text-ink-soft"
        }`}>
          {project.projectDesc}
        </p>

        <div className={`mt-4 inline-flex items-center gap-2 text-md font-semibold ${
          dark ? "text-cream/70" : "text-ink"
        }`}>
          Voir le projet
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}