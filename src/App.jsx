import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { scroller } from "react-scroll";

import Navbar from "./components/Navbar";
import MouseGlow from "./components/MouseGlow";
import ContactModal from "./components/ContactModal";
import WhatsAppButton from "./components/WhatsAppButton";
import useScrollProgress from "./hooks/useScrollProgress";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Technologies from "./sections/Technologies";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Testimonials from "./sections/Testimonials";
import CTA from "./sections/CTA";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  const [modal, setModal] = useState(false);
  const progress = useScrollProgress();

  const openModal = () => setModal(true);
  const scrollTo = (id) =>
    scroller.scrollTo(id, { smooth: true, duration: 700, offset: -80 });

  return (
    <div className="relative min-h-screen">
      <div
        className="scroll-progress"
        style={{ width: `${progress * 100}%` }}
      />
      <MouseGlow />
      <Navbar onCtaClick={openModal} />

      <main>
        <Hero onStart={openModal} onExplore={() => scrollTo("services")} />
        <Services />
        <About />
        <Technologies />
        <Projects />
        <Process />
        <Testimonials />
        <CTA onStart={openModal} />
        <Contact />
      </main>

      <Footer />
      <ContactModal open={modal} onClose={() => setModal(false)} />
      <WhatsAppButton />

      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "rgba(15,23,42,0.9)",
            color: "#fff",
            border: "1px solid rgba(56,189,248,0.35)",
            backdropFilter: "blur(10px)",
          },
        }}
      />
    </div>
  );
}
