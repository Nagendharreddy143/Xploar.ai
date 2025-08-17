import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./Icons";
import { useModal } from "../../context/ModalContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ page }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact" },
  ];

  const activeLinkStyle = {
    color: "#2B2F77",
    fontWeight: "700",
    transform: "scale(1.05)",
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 w-full z-50 transition-shadow duration-300 bg-white ${isScrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)]" : ""
        }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.08, rotate: 3 }} transition={{ type: "spring", stiffness: 300 }}>
            <Link to="/">
              <img
                src="/Xploar_logo.png"
                alt="Xploar Logo"
                className="h-10 w-auto drop-shadow-xl"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="relative font-poppins text-gray-600 hover:text-cosmic-indigo transition-colors group"
              >
                {label}
                {/* underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-indigo transition-all group-hover:w-full" />
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(0,255,200,0.6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="ml-4 bg-electric-aqua text-void-black font-poppins font-bold px-5 py-2 rounded-xl shadow-lg transition-transform"
            >
              Join Waitlist
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 text-cosmic-indigo"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-7 h-7" />
              ) : (
                <MenuIcon className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-lg shadow-lg rounded-b-2xl"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                  className="text-center py-2 font-poppins text-gray-700 rounded-lg hover:bg-gray-100 transition-all"
                >
                  {label}
                </NavLink>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  openModal();
                  setMenuOpen(false);
                }}
                className="mt-2 bg-electric-aqua text-void-black font-poppins font-bold w-full py-3 rounded-lg shadow-md"
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
