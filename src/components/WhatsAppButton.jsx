import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const message = encodeURIComponent(
  "Hello FLEETCOR TECHNOLOGIES, I want to discuss a software project.",
);
const whatsappUrl = `https://wa.me/918291051032?text=${message}`;

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/20 bg-slate-950/90 shadow-[0_0_30px_rgba(16,185,129,0.24)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-105 sm:h-16 sm:w-16"
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.96 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-sky-500/10" />
      <span className="absolute inset-0 rounded-full border border-cyan-400/20" />
      <FaWhatsapp className="relative text-white text-xl drop-shadow-[0_0_12px_rgba(16,185,129,0.85)]" />
      <motion.span
        className="pointer-events-none absolute -top-14 left-1/2 hidden w-max -translate-x-1/2 rounded-2xl border border-cyan-400/20 bg-slate-950/95 px-3 py-2 text-[11px] text-slate-100 shadow-xl backdrop-blur-xl backdrop-filter group-hover:flex"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Chat With Us On WhatsApp
      </motion.span>
    </motion.a>
  );
}
