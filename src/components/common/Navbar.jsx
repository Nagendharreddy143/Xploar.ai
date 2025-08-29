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

  const handleNavClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      <div className="container mx-auto px-0 md:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.08, rotate: 3 }} 
            transition={{ type: "spring", stiffness: 300 }}
            className="ml-1 md:ml-2"
          >
            <Link 
              to="/" 
              onClick={() => {
                window.scrollTo(0, 0);
                setMenuOpen(false);
              }}
            >
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
                onClick={handleNavClick}
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                className="relative font-poppins text-gray-600 hover:text-cosmic-indigo transition-colors group"
              >
                {label}
                {/* underline effect */}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cosmic-indigo transition-all group-hover:w-full" />
              </NavLink>
            ))}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={openModal}
              className="ml-4 bg-[#1A1A5A] text-white font-poppins font-bold px-5 py-2 rounded-xl shadow-lg transform hover:translate-y-[-1px] hover:shadow-xl transition-all duration-300 hover:bg-[#141441] focus:ring-4 focus:ring-[#1A1A5A]/30"
            >
              Start Your Journey
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
                  onClick={() => {
                    setMenuOpen(false);
                    handleNavClick();
                  }}
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
                className="mt-2 bg-[#1A1A5A] text-white font-poppins font-bold w-full py-3 rounded-lg shadow-md hover:bg-[#1A1A5A]/90 transform hover:translate-y-[-2px] transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
