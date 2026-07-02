import { Link } from "react-router-dom";
import { contactsData } from "../data/contactsData";
import { socialsData } from "../data/socialsData";

const navLinks = [
  { to: "/projets", label: "Projets" },
  // { to: "/services", label: "Services" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream flex flex-col">
      <div className="w-full mx-auto px-5 sm:px-8 pt-16 pb-10 flex flex-col flex-1 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 sm:pt-24 pb-10 sm:pb-56">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-3xl sm:text-4xl font-medium text-cream hover:text-sky transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 uppercase tracking-wide text-xs">
                Adresse
              </span>
              <span className="text-cream/80 text-sm">
                {contactsData.address}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 uppercase tracking-wide text-xs">
                Contact
              </span>
              <a
                href={`mailto:${contactsData.email}`}
                className="text-cream/80 text-sm hover:text-sky transition-colors"
              >
                {contactsData.email}
              </a>
              <a
                href={`tel:${contactsData.phone}`}
                className="text-cream/80 text-sm hover:text-sky transition-colors"
              >
                {contactsData.phone}
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-cream/40 uppercase tracking-wide text-xs">
                Réseaux
              </span>
              <a
                href={socialsData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 text-sm hover:text-sky transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={socialsData.github}
                target="_blank"
                rel="noreferrer"
                className="text-cream/80 text-sm hover:text-sky transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="bg-cream/5 rounded-3xl p-8 flex flex-col justify-between items-center text-center gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-4xl">👋</span>
              <h2 className="text-xl sm:text-2xl font-medium leading-tight">
                <span className="block">Mon profil vous intéresse&nbsp;?</span>
                <span className="block">Contactez-moi&nbsp;!</span>
              </h2>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit items-center bg-sky text-ink px-7 py-4 rounded-full text-[15px] font-medium hover:bg-accent transition-colors"
            >
              Me contacter
            </Link>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 text-xs text-cream/30 pt-10 border-t border-cream/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-sky flex items-center justify-center font-display font-semibold text-cream text-sm">
              D.
            </div>
            <span>Daria KHANINA</span>
          </div>
          <span>© 2026 — Tous droits réservés</span>
          <span>Conçu et développé avec React</span>
        </div>
      </div>
    </footer>
  );
}