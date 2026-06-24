import { motion } from "framer-motion";
import { aboutData } from "../data/aboutData";

export default function AboutPreview() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-[900px] mx-auto flex flex-col gap-17 items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-display text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[1.2] text-deep-light"
        >
          {aboutData.previewText1}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center font-display text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] leading-[1.2] text-deep-light"
        >
          {aboutData.previewText2}
        </motion.p>
      </div>
    </section>
  );
}
