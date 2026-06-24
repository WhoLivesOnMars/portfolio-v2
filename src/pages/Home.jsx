import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import AboutPreview from "../components/AboutPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesOverview />
      <Skills />
      <FeaturedProjects />
    </>
  );
}
