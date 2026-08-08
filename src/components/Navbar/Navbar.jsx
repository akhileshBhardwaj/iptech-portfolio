import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/images/Logo1.png";
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  // { name: "Work", path: "/work" },
  { name: "About", path: "/about" },
  { name: "Testimonial", path: "/testimonial" },
  { name: "Results", path: "/result" },
];

const Navbar = () => {
  const [navmenu, setNavmenu] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-2 md:px-6 py-4">
          {/* Logo */}

          <h2
            onClick={() => navigate("/")}
            className="text-2xl font-extrabold tracking-wide"
          >
            <img src={logo} alt="" width={120} height={100} />
          </h2>

          {/* Desktop Menu */}

          <ul className="hidden lg:flex items-center gap-8 text-gray-700 font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative transition hover:text-yellow-500
                       after:absolute after:left-0 after:-bottom-1 after:h-0.5
                       after:bg-yellow-400 after:transition-all
                      ${
                        isActive
                          ? "text-yellow-500 after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Button */}

          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:block rounded-xl bg-yellow-400 px-5 py-3 font-semibold text-gray-900 transition hover:scale-105 hover:shadow-lg"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setNavmenu(true)}
            className="lg:hidden rounded-lg p-2"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <AnimatePresence>
        {navmenu && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              onClick={() => setNavmenu(false)}
            />

            {/* Drawer */}

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-50 h-screen w-[80%] bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between border-b px-6 py-5">
                <h2
                  onClick={() => {
                    (navigate("/"), setNavmenu(false));
                  }}
                  className="text-2xl font-bold"
                >
                  <img src={logo} alt="" width={120} height={100} />
                </h2>

                <button onClick={() => setNavmenu(false)}>
                  <X size={28} />
                </button>
              </div>

              <div className="mt-12 flex flex-col gap-6 px-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setNavmenu(false)}
                      className={({ isActive }) =>
                        `text-xl font-medium transition hover:translate-x-2 hover:text-yellow-500 ${
                          isActive ? "text-yellow-500" : "text-gray-700"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}

                <motion.button
                  onClick={() => {
                    (navigate("/contact"), setNavmenu(false));
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 rounded-xl bg-yellow-400 py-3 font-semibold text-gray-900 shadow-lg"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
