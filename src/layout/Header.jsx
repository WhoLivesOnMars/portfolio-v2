import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from '../data/headerData';

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

const darkPages = ["/projets", "/contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { pathname } = useLocation();

  const isDark = darkPages.some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );

  useEffect(() => {
    if (!menuOpen) return;

    function handleClickOutside(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    function handleEscape(e) {
      if (e.key === "Escape") setMenuOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* Fullscreen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`sm:hidden fixed inset-0 z-40 flex flex-col justify-start pt-36 px-8 ${
              isDark ? "bg-cream text-ink" : "bg-ink text-cream"
            }`}
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 + 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block font-display text-[3rem] leading-[1.1] font-medium transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : isDark
                          ? "text-ink hover:text-accent"
                          : "text-cream hover:text-accent"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.a
              href={headerData.resumePdf}
              download="CV KHANINA Daria"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className={`mt-12 self-start flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-medium border transition-all duration-300 ${
                isDark
                  ? "border-ink/20 text-ink hover:border-ink/50"
                  : "border-cream/30 text-cream hover:border-cream/70"
              }`}
            >
              CV
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v8M3.5 6.5 7 10l3.5-3.5M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 px-5 sm:px-8 pt-6 sm:pt-8"
      >
        <div className="w-full mx-auto flex items-start justify-between">

          <Link
            to="/"
            className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-sky text-white flex items-center justify-center font-display text-3xl font-bold transition-transform duration-300 hover:scale-105 ring-1 ring-white/40 ring-offset-1 ring-offset-transparent"
          >
            D.
          </Link>

          <div className="flex items-center gap-4">
            <AnimatePresence>
              {!menuOpen && (
                <motion.a
                  key="cv-btn"
                  href={headerData.resumePdf}
                  download="CV KHANINA Daria"
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-medium border transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "border-cream/30 text-cream hover:border-cream/70"
                      : "border-ink/20 text-ink-soft hover:border-ink/50"
                  }`}
                >
                  CV
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v8M3.5 6.5 7 10l3.5-3.5M2 12h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.a>
              )}
            </AnimatePresence>

            <div className="flex items-center gap-4 group">
              {!menuOpen && (
                <span className={`hidden sm:block text-[16px] sm:text-[18px] font-medium opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${
                  isDark ? "text-cream" : "text-ink-soft"
                }`}>
                  Menu
                </span>
              )}
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                  aria-expanded={menuOpen}
                  className={`relative z-50 w-16 h-16 sm:w-18 sm:h-18 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                    menuOpen
                      ? "bg-white/15 backdrop-blur-md"
                      : "bg-cream/90 hover:bg-cream/70"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center gap-[5px]">
                    <span
                      className={`w-7 h-[3px] rounded-full transition-all duration-300 origin-center ${
                        menuOpen ? "bg-ink/60 rotate-45 translate-y-[8px]" : "bg-ink"
                      }`}
                    />
                    <span
                      className={`w-7 h-[3px] rounded-full transition-all duration-300 ${
                        menuOpen ? "bg-ink/60 opacity-0 scale-x-0" : "bg-ink"
                      }`}
                    />
                    <span
                      className={`w-7 h-[3px] rounded-full transition-all duration-300 origin-center ${
                        menuOpen ? "bg-ink/60 -rotate-45 -translate-y-[8px]" : "bg-ink"
                      }`}
                    />
                  </div>
                </button>

                {/* Desktop dropdown */}
                <AnimatePresence>
                  {menuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`hidden sm:block absolute right-0 top-0 w-[min(23rem,calc(100vw-2.5rem))] rounded-[2rem] px-8 py-7 sm:px-10 sm:py-8 shadow-2xl overflow-hidden ${
                        isDark ? "bg-cream text-ink" : "bg-ink text-cream"
                      }`}
                    >
                      <nav className="flex flex-col items-start gap-2 pr-16">
                        {navLinks.map((link, i) => (
                          <motion.div
                            key={link.to}
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.04 + 0.05 }}
                          >
                            <NavLink
                              to={link.to}
                              onClick={() => setMenuOpen(false)}
                              className={({ isActive }) =>
                                `block font-display text-[2.5rem] sm:text-[3rem] leading-[1.15] font-medium transition-colors duration-300 ${
                                  isActive
                                    ? "text-accent"
                                    : isDark
                                    ? "text-ink hover:text-accent"
                                    : "text-cream hover:text-accent"
                                }`
                              }
                            >
                              {link.label}
                            </NavLink>
                          </motion.div>
                        ))}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}