// Footer.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between">
        {/* Branding */}
        <div className="mb-8 md:mb-0">
          <h1 className="text-2xl font-bold text-white">YourBrand</h1>
          <p className="mt-2 text-gray-400 max-w-xs">
            Building exceptional web experiences with modern design and technology.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h2 className="font-semibold text-white mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
