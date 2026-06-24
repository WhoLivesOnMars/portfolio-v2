import { motion } from "framer-motion";
import { servicesData } from "../data/servicesData";

export default function ServicesOverview() {
  return (
    <section className="px-5 sm:px-8 py-20 sm:py-28">
      <div className="max-w-[1400px] mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-3xl sm:text-5xl font-medium max-w-2xl text-balance-tight"
        >
          Je conçois des produits, du code et des interfaces.
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5 mt-12">
          {servicesData.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-3xl p-7 sm:p-8 min-h-[220px] flex flex-col justify-between ${
                service.color.includes("bg-deep")
                  ? service.color
                  : `${service.color} text-ink`
              }`}
            >
              <span className="text-sm font-medium opacity-60">
                0{i + 1}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium mb-2">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-80">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
