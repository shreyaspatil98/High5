"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket, BookOpenCheck, Users, Star } from "lucide-react";

const Navbar = ({ logoInNavbarOpacity = 1 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) =>
    pathname === path ? "text-blue-400 font-semibold" : "text-gray-200";

  const hoverUnderline =
    "relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 
        bg-white/10 backdrop-blur-lg 
        border-b border-white/20
        shadow-[0_2px_20px_rgba(0,0,0,0.1)]
        text-white
        transition-all duration-300 ease-in-out
        ${scrolled ? "h-12" : "h-20"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center justify-between relative">
        {/* LEFT LINKS */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/quiz"
            className={`${isActive("/quiz")} ${hoverUnderline} flex items-center gap-2 transition-all duration-300 hover:text-blue-400 hover:-translate-y-1`}
          >
            <Rocket size={18} /> Quiz
          </Link>
        </div>

        {/* CENTER LOGO */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300"
          style={{ opacity: logoInNavbarOpacity }}
        >
          <Link href="/">
            <Image
              src="/download.png"
              alt="Logo"
              width={scrolled ? 32 : 40}
              height={scrolled ? 32 : 40}
              className="rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
            />
          </Link>
        </div>

        {/* RIGHT LINKS */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link
            href="/publications"
            className={`flex items-center gap-2 ${isActive("/publications")} ${hoverUnderline} transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-blue-400`}
          >
            <BookOpenCheck size={18} /> Publications
          </Link>
          <Link
            href="/community"
            className={`flex items-center gap-2 ${isActive("/community")} ${hoverUnderline} transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-blue-400`}
          >
            <Users size={18} /> Community
          </Link>
          <Link
            href="/stars"
            className={`flex items-center gap-2 ${hoverUnderline} transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:text-blue-400`}
          >
            <Star size={18} /> Stars
          </Link>
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-100 hover:text-blue-400 transition-colors duration-300"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-gray-900/70 backdrop-blur-xl text-gray-100 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pb-4 space-y-3">
          <Link href="/quiz" className="block py-2 hover:text-blue-400 flex items-center gap-2">
            <Rocket size={18} /> Quiz
          </Link>
          <Link href="/publications" className="block py-2 hover:text-blue-400 flex items-center gap-2">
            <BookOpenCheck size={18} /> Publications
          </Link>
          <Link href="/community" className="block py-2 hover:text-blue-400 flex items-center gap-2">
            <Users size={18} /> Community
          </Link>
          <Link href="/stars" className="block py-2 hover:text-blue-400 flex items-center gap-2">
            <Star size={18} /> Stars
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
