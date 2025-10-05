"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, HelpCircle, Users, Bot } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // get current path

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) => pathname === path ? "text-blue-600 font-semibold" : "";

  // Hover underline animation
  const hoverUnderline = "relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="shadow-md fixed w-full top-0 z-50 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LEFT LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/quiz"
              className={`${isActive("/quiz")} ${hoverUnderline} flex items-center gap-2 transition-transform duration-300 ease-in-out hover:text-blue-600`}
            >
              <HelpCircle size={18} /> Quiz
            </Link>
          </div>

          {/* CENTER LOGO */}
          <div className="flex items-center gap-2">
            <Image
              src="/download.png"
              className="rounded-full hover:scale-105 transition-transform duration-200"
              alt="High5 Logo"
              width={40}
              height={40}
            />
            <Link
              href="/"
              className={`text-2xl font-bold tracking-wide ${isActive("/")} ${hoverUnderline} transition-colors duration-300 ease-in-out hover:text-blue-600`}
            >
              High5
            </Link>
          </div>

          {/* RIGHT LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/publications"
              className={`flex items-center gap-2 ${isActive("/publications")} ${hoverUnderline} transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-blue-600`}
            >
              <Image
                src="/book.gif" // your GIF in public folder
                alt="Publications"
                width={20}
                height={20}
              />
              Publications
            </Link>
            <Link
              href="/community"
              className={`flex items-center gap-2 ${isActive("/community")} ${hoverUnderline} transform transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:text-blue-600`}
            >
              <Users size={18} /> Community
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="transition-colors duration-300 ease-in-out hover:text-blue-600"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Popup */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-100 text-gray-900 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4 space-y-3">
          <Link
            href="/quiz"
            className={`block py-2 ${isActive("/quiz")} hover:text-blue-600 transition-colors duration-300`}
          >
            ❓ Quiz
          </Link>
          <Link
            href="/publications"
            className={`block py-2 ${isActive("/publications")} hover:text-blue-600 transition-colors duration-300`}
          >
            📖 Publications
          </Link>
          <Link
            href="/community"
            className={`block py-2 ${isActive("/community")} hover:text-blue-600 transition-colors duration-300`}
          >
            👥 Community
          </Link>
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300 ease-in-out"
        onClick={() => alert("Open AI Chatbot")}
      >
        <Bot size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
