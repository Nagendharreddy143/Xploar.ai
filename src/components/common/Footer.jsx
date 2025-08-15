import React from "react";
import { Link } from "react-router-dom";
import useAos from "../../hooks/useAos";

// Importing the necessary icons from your central file
import { TwitterIcon, LinkedInIcon, InstagramIcon } from "../common/Icons";

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
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <LinkedInIcon className="w-6 h-6" />
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
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
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
