"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0b0f19]/90 backdrop-blur-md shadow-lg fixed top-0 left-0 right-0 z-50 border-b border-blue-900/40">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
       <Link
  href="/"
  className="flex items-center space-x-3 text-2xl font-semibold text-blue-400 hover:text-blue-300 transition"
>
  <Image
    src="/logo.jpg"
    alt="Logo"
    width={42}
    height={42}
    className="rounded-full border border-blue-400"
  />
  <span>NASA BioScience</span>
</Link>

        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
 <NavLink href="/" text="Home" />
 <NavLink href="/publication" text="Publication" />
            <NavLink href="/resources" text="Resources" />
            <NavLink href="/quiz" text="Quiz" />
            <NavLink href="/community" text="Community" />
            <NavLink href="/about" text="About" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-300 hover:text-white transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f19]/95 border-t border-blue-900/40 shadow-lg">
          <div className="px-6 py-3 space-y-3">
            <NavLink href="/" text="Home" />
 <NavLink href="/publication" text="Publication" />
            <NavLink href="/resources" text="Resources" />
            <NavLink href="/quiz" text="Quiz" />
            <NavLink href="/community" text="Community" />
            <NavLink href="/about" text="About" />
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, text }) {
  return (
    <Link
      href={href}
      className="text-gray-300 hover:text-blue-400 transition text-lg font-medium"
    >
      {text}
    </Link>
  );
}
