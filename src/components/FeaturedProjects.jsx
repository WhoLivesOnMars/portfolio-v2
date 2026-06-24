import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featured = projectsData.slice(0, 5);

  return (
    <section className="bg-white px-5 sm:px-8 py-20 sm:py-28">
      <div className="w-full mx-auto">
        <div className="flex flex-col gap-24">
          <div className="flex flex-col md:flex-row justify-center items-start gap-24 lg:gap-40">
            {featured[0] && (
              <div className="w-full md:w-[33%]">
                <ProjectCard project={featured[0]} />
              </div>
            )}

            {featured[1] && (
              <div className="w-full md:w-[33%] md:mt-20">
                <ProjectCard project={featured[1]} />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-20">
            {featured.slice(2, 5).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            to="/projets"
            className="
              inline-flex items-center gap-2
              rounded-[1.4rem] bg-ink px-10 py-6
              text-lg font-medium text-white
              transition-transform duration-300
              hover:-translate-y-1
            "
          >
            Voir tous les projets
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}