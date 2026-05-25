import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Terminal,
  Cloud,
  Layers,
  CheckCircle2,
} from "lucide-react";
import Particles from "../components/Particles";
import GradientBlobs from "../components/GradientBlobs";

const techBadges = ["React", "Node.js", "AI", "Cloud", "APIs"];

export default function Hero({ onStart, onExplore }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 px-6 md:px-10 overflow-hidden"
    >
      <GradientBlobs />
      <Particles count={30} />

      <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase glass px-4 py-2 rounded-full text-cyanp">
            <Sparkles size={14} /> Software Development Company
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
            Building <span className="grad-text">Scalable Digital</span>{" "}
            Solutions For <span className="grad-text">Modern Businesses</span>
          </h1>
          <p className="mt-6 text-textsec text-base md:text-lg max-w-xl">
            We engineer high-performance web, mobile, AI, and enterprise
            solutions designed to help businesses scale faster and innovate
            confidently.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={onStart} className="btn-primary">
              Start Project <ArrowRight size={18} />
            </button>
            <button onClick={onExplore} className="btn-ghost">
              Explore Services
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {techBadges.map((t, i) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="glass px-4 py-2 rounded-full text-xs text-textsec hover:text-cyanp hover:border-cyanp transition"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <DashboardVisual />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardVisual() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 -m-6 rounded-[2.5rem] blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle,#0ea5e9,transparent 58%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-[560px]"
      >
        <motion.div
          whileHover={{ y: -10, rotateX: 2, rotateY: 6, scale: 1.01 }}
          animate={{ y: [0, -8, 0], rotate: [0, 1, 0, -1, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
          style={{ perspective: 1400 }}
        >
          <div
            className="relative rounded-[2rem] border border-cyan-400/15 bg-[#07101f]/95 shadow-[0_40px_120px_rgba(0,194,255,0.18)] overflow-hidden"
            style={{ transform: "rotateY(-8deg) rotateX(4deg)" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.14),transparent_32%)] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-r from-cyan-400/40 via-transparent to-cyan-400/10" />

            <div className="px-6 pt-6 pb-5">
              <div className="flex items-center justify-between text-[11px] text-cyan-100/75 uppercase tracking-[0.24em]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#f87171] shadow-[0_0_12px_rgba(248,113,113,0.4)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24] shadow-[0_0_12px_rgba(251,191,36,0.35)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#34d399] shadow-[0_0_12px_rgba(52,211,153,0.4)]" />
                  <span className="ml-2">dev.workspace</span>
                </div>
                <span className="rounded-full border border-cyan-500/20 px-3 py-1 bg-slate-950/60">
                  VS Code
                </span>
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-[1.75rem] border border-cyan-500/10 bg-[#031424]/95 overflow-hidden shadow-inner">
                <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-cyan-500/10 bg-slate-950/60">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/80" />
                    <span className="font-semibold text-sm text-slate-100">
                      React Dev
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-cyan-200/70 uppercase tracking-[0.24em]">
                    <span className="hidden sm:inline">Workspace</span>
                    <Code2 size={14} />
                  </div>
                </div>

                <div className="grid grid-cols-[45px_1fr] gap-4 p-5">
                  <div className="space-y-2">
                    {Array.from({ length: 8 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={`block h-2 rounded-full bg-cyan-500/15 ${
                          idx === 0
                            ? "w-[55%]"
                            : idx === 1
                              ? "w-[70%]"
                              : idx === 2
                                ? "w-[40%]"
                                : idx === 3
                                  ? "w-[65%]"
                                  : idx === 4
                                    ? "w-[50%]"
                                    : idx === 5
                                      ? "w-[60%]"
                                      : idx === 6
                                        ? "w-[45%]"
                                        : "w-[75%]"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="space-y-3">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
                      React · Tailwind · API
                    </div>
                    <pre className="overflow-x-auto text-[11px] leading-5 font-mono text-slate-200">
                      {`import React from "react";
import { Button } from "./ui";

const Workspace = () => {
  const apiEndpoint = "/api/deploy";

  return (
    <div className="bg-slate-950/70 p-5 rounded-3xl">
      <h2 className="text-cyan-300">Deploy UI Stream</h2>
      <p className="text-slate-400">Realtime CI/CD status</p>
    </div>
  );
};

export default Workspace;`}
                    </pre>
                  </div>
                </div>

                <div className="grid gap-3 px-5 pb-5">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white/5 border border-cyan-500/10 p-3">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
                        <Terminal size={14} />
                        Terminal
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-100">
                        npm run deploy
                      </p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        Deploying to cloud
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white/5 border border-cyan-500/10 p-3">
                      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
                        <Layers size={14} />
                        Git Flow
                      </div>
                      <p className="mt-3 text-sm font-semibold text-slate-100">
                        feature/dev-workspace
                      </p>
                      <div className="mt-3 rounded-full bg-cyan-400/10 p-1">
                        <div className="h-2.5 rounded-full bg-cyan-400/75 w-[65%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden sm:block absolute -top-4 left-0 w-[14rem] rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              Development Process
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-100">
              {[
                "Planning",
                "Design",
                "Development",
                "Testing",
                "Deployment",
              ].map((step) => (
                <li
                  key={step}
                  className={`flex items-center justify-between rounded-2xl px-3 py-2 ${
                    step === "Development"
                      ? "bg-cyan-500/10 text-cyan-100"
                      : "bg-white/5 text-slate-300"
                  }`}
                >
                  <span>{step}</span>
                  {step === "Development" ? (
                    <span className="text-[10px] uppercase tracking-[0.3em] bg-cyan-500/15 px-2 py-1 rounded-full text-cyan-100">
                      Active
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45 }}
            className="hidden md:block absolute top-20 right-0 w-[13rem] rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              Tech Stack
            </p>
            <div className="mt-4 grid gap-3 text-sm text-slate-100">
              {[
                { label: "React", color: "bg-[#61dafb]/20" },
                { label: "Node.js", color: "bg-[#3bb34c]/20" },
                { label: "TypeScript", color: "bg-[#3178c6]/20" },
                { label: "MongoDB", color: "bg-[#13aa52]/20" },
              ].map((tech) => (
                <div
                  key={tech.label}
                  className="flex items-center gap-3 rounded-2xl border border-cyan-500/10 bg-white/5 px-3 py-2 transition hover:border-cyan-400/40"
                >
                  <div
                    className={`${tech.color} flex h-9 w-9 items-center justify-center rounded-2xl text-[12px] font-semibold text-slate-950 shadow-[0_0_12px_rgba(14,165,233,0.16)]`}
                  >
                    {tech.label.slice(0, tech.label === "Node.js" ? 4 : 2)}
                  </div>
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="hidden md:block absolute bottom-24 left-0 w-[14rem] rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              <span>Code Quality</span>
              <CheckCircle2 size={14} className="text-cyan-300" />
            </div>
            <div className="mt-4 flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">
                <div className="absolute inset-1 rounded-full border border-cyan-400/20" />
                <div className="absolute inset-3 rounded-full bg-cyan-400/70" />
                <span className="relative text-sm font-semibold text-slate-950">
                  A+
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  A+ Code Quality
                </p>
                <p className="text-[12px] text-slate-400">100% Maintainable</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.65 }}
            className="hidden md:block absolute bottom-4 right-0 w-[13rem] rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow"
          >
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              <Cloud size={14} />
              Production Deployment
            </div>
            <div className="mt-4 rounded-3xl bg-white/5 border border-cyan-500/10 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    Live Environment Active
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Cloud pipeline running
                  </p>
                </div>
                <span className="flex h-3.5 w-3.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className="hidden lg:block absolute top-24 right-[-6rem] w-[14rem] rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              Project Overview
            </p>
            <div className="mt-4 space-y-3 text-slate-100">
              <div className="text-sm font-semibold">
                Project Completion: 75%
              </div>
              {[
                { label: "UI Design", value: 80 },
                { label: "Backend APIs", value: 70 },
                { label: "Deployment", value: 75 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>{item.label}</span>
                    <span>{item.value}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-cyan-400"
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="sm:hidden mt-6 rounded-[1.75rem] glass border border-cyan-400/15 p-4 shadow-glow">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-cyan-200/70">
              <span>Workspace Status</span>
              <span className="inline-flex items-center gap-2 text-cyan-300">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.35)]" />
                Active
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-300">
              Premium developer workspace with live deploy and code review
              workflow.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
