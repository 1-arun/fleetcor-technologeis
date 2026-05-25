import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className={`mb-14 ${center ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="inline-block text-xs tracking-[0.25em] font-semibold uppercase grad-text mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-textsec max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
