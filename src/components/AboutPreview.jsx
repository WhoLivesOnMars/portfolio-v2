import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { aboutData } from "../data/aboutData";
import { headerData } from "../data/headerData";

export default function AboutPreview() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="aspect-[4/5] rounded-3xl bg-cream-dark flex items-center justify-center order-2 sm:order-1"
        >
          <span className="font-display text-7xl text-ink/10">
            {headerData.name[0]}.
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-1 sm:order-2"
        >
          <p className="text-sm font-medium text-accent uppercase tracking-wide mb-3">
            {aboutData.title}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-medium mb-5 text-balance-tight">
            Curieuse, rigoureuse, et toujours prête à comprendre le
            pourquoi avant le comment.
          </h2>
          <p className="text-ink-soft leading-relaxed mb-8">
            {aboutData.description1}
          </p>
          <Link
            to="/a-propos"
            className="inline-flex items-center gap-2 border border-ink/15 px-6 py-3 rounded-full text-sm font-medium hover:border-ink/40 transition-colors"
          >
            En savoir plus sur moi
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
