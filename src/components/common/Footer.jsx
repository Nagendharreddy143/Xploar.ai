import React from "react";
import { Link } from "react-router-dom";
import useAos from "../../hooks/useAos";

// Importing icons from Lucide React
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  useAos();

  return (
    <footer id="contact" className="bg-gray-900 text-ice-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand and Social Links */}
          <div className="md:col-span-5 lg:col-span-6" data-aos="fade-up">
            <Link
              to="/"
              className="text-2xl font-bold font-space-grotesk text-white"
            >
              Xploar.ai
            </Link>
            <p className="mt-4 text-gray-400 max-w-xs">
              Your smart study companion, designed to turn your curiosity into
              clarity for the UPSC exam.
            </p>
            <p className="mt-2 text-sm text-gray-300 italic">
              Where Curiosity Becomes Clarity
            </p>
            <div className="mt-6 flex space-x-6">
              <a
                href="https://www.instagram.com/xploar.ai?igsh=M2tiODdvbHp6MGtq"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Follow us on Instagram"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1A1A5A] to-[#1A1A5A]/70 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Instagram className="w-6 h-6 text-gray-400 group-hover:text-[#1A1A5A] transition-colors" />
              </a>
              <a
                href="https://x.com/XploarAi"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Follow us on Twitter"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1A1A5A] to-[#1A1A5A]/70 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Twitter className="w-6 h-6 text-gray-400 group-hover:text-[#1A1A5A] transition-colors" />
              </a>
              <a
                href="http://youtube.com/@xploarai?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Subscribe to our YouTube channel"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1A1A5A] to-[#1A1A5A]/70 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Youtube className="w-6 h-6 text-gray-400 group-hover:text-[#1A1A5A] transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/company/xploarai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Connect with us on LinkedIn"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-[#1A1A5A] to-[#1A1A5A]/70 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-[#1A1A5A] transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="md:col-span-7 lg:col-span-6 grid grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <h3 className="font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-[#1A1A5A] transition-colors duration-300 flex items-center gap-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About Us
                    <span className="opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-[#1A1A5A] transition-colors duration-300 flex items-center gap-2"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact
                    <span className="opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">→</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Bottom section */}
        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2024 Xploar.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
