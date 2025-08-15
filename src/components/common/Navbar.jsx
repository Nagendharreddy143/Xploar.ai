import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MenuIcon, CloseIcon } from "./Icons";

const Navbar = ({ onOpenModal = () => {} }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effect to add a subtle shadow when the user scrolls
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

  // Style for the currently active navigation link
  const activeLinkStyle = {
    color: "#2B2F77", // cosmic-indigo
    fontWeight: "600",
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-space-grotesk text-2xl font-bold text-cosmic-indigo transition-transform hover:scale-105"
          >
            Xploar.ai
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : undefined
                }
                className="font-poppins text-gray-600 hover:text-cosmic-indigo transition-colors"
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={onOpenModal}
              className="ml-4 bg-electric-aqua text-void-black font-poppins font-bold px-5 py-2 rounded-lg transition-transform hover:scale-105"
            >
              Join Waitlist
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 text-cosmic-indigo"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <CloseIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-out ${
          isMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              className="text-center py-2 font-poppins text-gray-600 rounded-lg hover:bg-gray-100"
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => {
              onOpenModal();
              setMenuOpen(false);
            }}
            className="mt-2 bg-electric-aqua text-void-black font-poppins font-bold w-full py-3 rounded-lg"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
