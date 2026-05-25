import { Code2, Globe, Smartphone, Cloud, Cpu, Palette } from "lucide-react";

export const company = {
  name: "FLEETCOR TECHNOLOGIES PRIVATE LIMITED",
  shortName: "FLEETCOR TECHNOLOGIES",
  tagline: "Transforming Ideas Into Scalable Digital Products",
  email: "info@fleetcortech.in",
  founded: "2021",
  primaryAddress:
    "Office No. 1416, Ghanshyam Enclave Premises, Link Road, Lalji Pada Signal, Kandivali West, Mumbai, Maharashtra, India - 400067",
  directors: ["Aniruddha Suhas Kamble", "Vidya Shreedhar Sherigar"],
  hours: "Mon – Sat : 10:00 AM – 7:00 PM",
};

export const navLinks = [
  { name: "Home", to: "home" },
  { name: "Services", to: "services" },
  { name: "About", to: "about" },
  { name: "Technologies", to: "tech" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Tailor-made enterprise software engineered for scale, security and long-term performance.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "High-performance, SEO-friendly web platforms built with modern frameworks and clean architecture.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Solutions",
    desc: "Cross-platform iOS and Android applications crafted with native-grade UX and reliability.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud-native deployments on AWS, GCP and Azure with full DevOps automation.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Intelligent systems, ML pipelines and automation workflows that drive measurable business impact.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Research-driven product design that turns complex workflows into intuitive, premium experiences.",
  },
];

export const stats = [
  { label: "Projects Delivered", value: "120+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Years Experience", value: "5+" },
  { label: "Client Satisfaction", value: "98%" },
];

export const techs = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Firebase",
  "AWS",
  "Docker",
  "GitHub",
];

export const projects = [
  {
    title: "AI Analytics Dashboard",
    tags: ["React", "Python", "AI"],
    desc: "Real-time analytics platform with predictive ML models and natural-language insights.",
    gradient: "from-cyan-500/30 to-blue-600/30",
  },
  {
    title: "Enterprise CRM Platform",
    tags: ["Next.js", "Node", "Postgres"],
    desc: "Multi-tenant CRM with workflow automation, role-based access and deep integrations.",
    gradient: "from-blue-500/30 to-indigo-600/30",
  },
  {
    title: "Fintech SaaS Application",
    tags: ["React", "AWS", "Stripe"],
    desc: "Secure financial SaaS with real-time ledgers, KYC, and global payment infrastructure.",
    gradient: "from-sky-400/30 to-cyan-600/30",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Understanding goals, users, and scope.",
  },
  {
    step: "02",
    title: "Planning",
    desc: "Architecture, roadmap and sprint design.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Interfaces, prototypes and design system.",
  },
  {
    step: "04",
    title: "Development",
    desc: "Agile builds with continuous integration.",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "Launch, monitor and scale with confidence.",
  },
];

export const testimonials = [
  {
    name: "Rahul Mehta",
    role: "CTO, NovaPay",
    review:
      "FleetCor delivered our fintech platform with exceptional quality. Their architecture decisions saved us months of refactoring.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    role: "Product Lead, BrightCart",
    review:
      "Their team feels like an extension of ours — fast, thoughtful, and obsessed with shipping polished software.",
    rating: 5,
  },
  {
    name: "Daniel Kim",
    role: "Founder, Lumen AI",
    review:
      "From design to deployment, the experience was seamless. Our AI dashboard performs flawlessly at scale.",
    rating: 5,
  },
];
