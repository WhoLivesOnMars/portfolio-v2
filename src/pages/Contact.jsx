import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { contactsData } from "../data/contactsData";

const fields = [
  { name: "name", label: "Nom", type: "text", maxLength: 100 },
  { name: "email", label: "Email", type: "email", maxLength: 150 },
  { name: "subject", label: "Objet", type: "text", maxLength: 150 },
];

function Field({ name, label, type = "text", maxLength, textarea = false }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-cream/70">
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          required
          rows={5}
          maxLength={1000}
          className="w-full rounded-xl bg-cream/10 border border-cream/20 focus:border-sky px-4 py-3 text-cream outline-none resize-none transition-colors duration-200 placeholder:text-cream/30"
        />
      ) : (
        <input
          name={name}
          type={type}
          required
          maxLength={maxLength}
          pattern={type === "email" ? "[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}" : undefined}
          className="w-full rounded-xl bg-cream/10 border border-cream/20 focus:border-sky px-4 py-3 text-cream outline-none transition-colors duration-200"
        />
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="px-4 sm:px-6 pt-32 sm:pt-40 pb-20 bg-ink">
      <div className="max-w-4xl xl:max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 lg:gap-24">

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-cream text-4xl sm:text-5xl font-medium leading-tight pb-8"
          >
            Travaillons ensemble
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-5 text-cream/50 leading-relaxed max-w-sm"
          >
            Un projet, une question, ou juste envie d'échanger&nbsp;? N'hésitez
            pas à m'écrire.
          </motion.p>

          <div className="mt-10 flex flex-col gap-3">
            <a
              href={`mailto:${contactsData.email}`}
              className="text-sm text-cream/80 hover:text-sky transition-colors"
            >
              {contactsData.email}
            </a>
            <span className="text-sm text-cream/80">{contactsData.address}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {status === "success" ? (
            <div className="h-full flex flex-col justify-center gap-3">
              <p className="text-3xl">✉️</p>
              <h2 className="text-2xl font-medium text-cream">
                Message envoyé !
              </h2>
              <p className="text-cream/50">Merci, je vous réponds très vite.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {fields.map((f) => (
                <Field key={f.name} {...f} />
              ))}
              <Field name="message" label="Message" textarea />

              {status === "error" && (
                <p className="text-sm text-red-400">
                  Une erreur est survenue, veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 self-start inline-flex items-center gap-2 bg-cream text-ink px-7 py-3.5 rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors duration-300 disabled:opacity-50"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer →"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}