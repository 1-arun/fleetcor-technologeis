import { Link } from "react-scroll";
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../components/Logo";
import { company, navLinks, services } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-blue-500/15 mt-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={38} />
            <span className="font-display font-semibold">
              {company.shortName}
            </span>
          </div>
          <p className="text-textsec text-sm leading-relaxed">
            {company.tagline}. Building scalable digital products for modern
            businesses since {company.founded}.
          </p>
          <div className="flex gap-3 mt-5">
            {[FaLinkedin, FaTwitter, FaGithub, FaInstagram].map((Ic, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-cyanp hover:border-cyanp transition"
              >
                <Ic />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h5 className="font-display font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  smooth
                  duration={600}
                  offset={-80}
                  className="text-textsec hover:text-cyanp cursor-pointer"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-display font-semibold mb-4">Services</h5>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li
                key={s.title}
                className="text-textsec hover:text-cyanp transition"
              >
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="font-display font-semibold mb-4">Contact</h5>
          <p className="text-textsec text-xs leading-relaxed mb-3">
            {company.primaryAddress}
          </p>
          <a
            href={`mailto:${company.email}`}
            className="text-cyanp text-sm hover:underline"
          >
            {company.email}
          </a>
        </div>
      </div>

      <div className="border-t border-blue-500/15 py-5 text-center text-xs text-textsec">
        © 2026 {company.name}. All rights reserved.
      </div>
    </footer>
  );
}
