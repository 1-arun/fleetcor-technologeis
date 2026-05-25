import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { navLinks, company } from "../data/content";

export default function Navbar({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onS = () => setScrolled(window.scrollY > 20);
    onS();
    window.addEventListener("scroll", onS);
    return () => window.removeEventListener("scroll", onS);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-bg/70 border-b border-blue-500/15" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-10 py-4">
        <Link to="home" smooth duration={600} className="flex items-center gap-3 cursor-pointer">
          <Logo size={38} />
          <span className="font-display font-semibold tracking-wide text-sm md:text-base">
            {company.shortName}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              smooth
              duration={600}
              spy
              offset={-80}
              activeClass="text-cyanp"
              className="text-sm text-textsec hover:text-white cursor-pointer relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyanp after:transition-all hover:after:w-full"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={onCtaClick} className="btn-primary hidden sm:inline-flex !py-2 !px-5 text-sm">
            Get Started
          </button>
          <button
            className="lg:hidden p-2 rounded-md glass"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden px-5 pb-5"
          >
            <div className="glass rounded-2xl p-5 flex flex-col gap-3">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="py-2 text-textsec hover:text-white cursor-pointer"
                >
                  {l.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onCtaClick();
                }}
                className="btn-primary mt-2 w-full"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
