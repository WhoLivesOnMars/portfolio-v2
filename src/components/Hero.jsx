import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { headerData } from "../data/headerData";
import ImageCarousel from "./ImageCarousel";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 overflow-hidden bg-white">
      <div className="w-full px-5 sm:px-8 flex flex-col items-center justify-center gap-6 sm:gap-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-base sm:text-3xl text-ink-soft"
        >
          Salut, moi c'est{" "}
          <Link
            to="/a-propos"
            className="text-accent font-medium hover:underline underline-offset-4 transition-all duration-300"
          >
            {headerData.name}
          </Link>
          {" "}—
        </motion.p>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="
            text-center
            font-display font-bold tracking-[-0.06em]
            text-[2.2rem] sm:text-[3rem] lg:text-[4.5rem] xl:text-[6rem]
            leading-[0.88]
            max-w-[1150px]
            whitespace-pre-line
          "
        >
          <TypeAnimation
            sequence={[
              600,
              `${headerData.heroTitle1}\n${headerData.heroTitle2}`,
            ]}
            speed={45}
            cursor={true}
          />
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="mt-6 text-center text-base sm:text-lg lg:text-xl text-ink-soft px-5"
        >
          {headerData.heroSubtitle}
        </motion.p>
      </div>

      <div className="mt-12 sm:mt-16">
        <ImageCarousel />
      </div>
    </section>
  );
}