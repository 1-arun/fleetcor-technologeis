import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { company } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeading
        eyebrow="Get In Touch"
        title={
          <>
            Let’s <span className="grad-text">Connect</span>
          </>
        }
        subtitle="Reach out to our team — we’d love to hear about your next project."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        <Card icon={MapPin} title="Office Location">
          <p className="text-sm text-textsec leading-relaxed">
            Office No. 1416,
            <br />
            Ghanshyam Enclave Premises,
            <br />
            Link Road, Lalji Pada Signal,
            <br />
            Kandivali West, Mumbai, Maharashtra, India - 400067
          </p>
          <a
            href={`mailto:${company.email}`}
            className="text-cyanp text-sm hover:text-cyan-200 transition mt-4 inline-block"
          >
            {company.email}
          </a>
        </Card>
        <Card icon={Clock} title="Working Hours">
          <p className="text-sm text-textsec leading-relaxed">
            {company.hours}
          </p>
        </Card>
        <Card icon={Users} title="Directors">
          <ul className="text-sm text-textsec space-y-1">
            {company.directors.map((d) => (
              <li key={d}>• {d}</li>
            ))}
          </ul>
        </Card>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glow lg:col-span-3 p-0 overflow-hidden min-h-[260px] relative"
        >
          <iframe
            title="Office Map"
            src="https://www.google.com/maps?q=Kandivali+West+Mumbai&output=embed"
            className="w-full h-full min-h-[260px] grayscale-[40%] opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card-glow"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{
          background: "linear-gradient(135deg,#00C2FF,#2563EB)",
          boxShadow: "0 0 18px rgba(0,194,255,0.4)",
        }}
      >
        <Icon size={20} />
      </div>
      <h4 className="font-display font-semibold mb-2">{title}</h4>
      {children}
    </motion.div>
  );
}
