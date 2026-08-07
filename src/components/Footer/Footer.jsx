import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "framer-motion";
import FooterWave from "./FooterWave";
import logoWhite from "../../assets/images/logo-white.png";


const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Work", path: "/work" },
  { name: "Results", path: "/result" },
];

const services = [
  "Video Editing",
  "Graphic Design",
  "Social Media",
  "SEO",
  "Meta Ads",
  "Website Development",
];

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0B1120] text-white">
      <FooterWave />
      {/* Top Border */}

      <div className="h-2.5 w-full bg-linear-to-r from-yellow-300 via-yellow-500 to-yellow-300" />

      {/* Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}

          <div>
            <img src={logoWhite} alt="" className="w-40" />

            <p className="mt-6 leading-8 text-gray-400">
              We create modern digital experiences through website development,
              branding, social media marketing and performance campaigns.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full border border-yellow-400/30 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaFacebookF size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-yellow-400/30 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                className="rounded-full border border-yellow-400/30 p-3 transition hover:bg-yellow-400 hover:text-black"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-4">
              {quickLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `transition hover:text-yellow-400 ${
                      isActive ? "text-yellow-400" : "text-gray-400"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}

          <div>
            <h3 className="text-xl font-bold">Services</h3>

            <div className="mt-6 flex flex-col gap-4">
              {services.map((item) => (
                <p
                  key={item}
                  className="cursor-pointer text-gray-400 transition hover:text-yellow-400"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-xl font-bold">Contact</h3>

            <div className="mt-6 space-y-6">
              <div className="flex gap-3">
                <Phone className="text-yellow-400" />

                <p className="text-gray-400">+91 98765 43210</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-yellow-400" />

                <p className="text-gray-400">info@iptech.com</p>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-yellow-400" />

                <p className="text-gray-400">varanasi Sarnath (pahadiya), Uttar Pradesh</p>
              </div>
            </div>

            {/* Newsletter */}

            <div className="mt-10">
              <h4 className="font-semibold">Newsletter</h4>

              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-l-xl border border-yellow-400/20 bg-white/5 px-4 py-3 outline-none"
                />

                <button className="rounded-r-xl bg-yellow-400 px-5 font-semibold text-black transition hover:bg-yellow-300">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-gray-500">© 2026 IPTECH. All Rights Reserved.</p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full bg-yellow-400 p-4 text-black transition hover:scale-110"
          >
            <ArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
