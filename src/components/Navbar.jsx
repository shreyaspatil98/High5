"use client"; // since we use useState and hooks

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, BookOpen, HelpCircle, Users, Bot } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`shadow-md fixed w-full top-0 z-50 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-bold tracking-wide">
            🔬 ResearchHub
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/publications" className="flex items-center gap-2 hover:text-blue-600">
              <BookOpen size={18}/> Publications
            </Link>
            <Link href="/quiz" className="flex items-center gap-2 hover:text-blue-600">
              <HelpCircle size={18}/> Quiz
            </Link>
            <Link href="/community" className="flex items-center gap-2 hover:text-blue-600">
              <Users size={18}/> Community
            </Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="ml-4 px-3 py-1 rounded-lg border hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28}/> : <Menu size={28}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"} px-4 pb-4 space-y-3`}>
          <Link href="/publications" className="block py-2 hover:text-blue-600">📖 Publications</Link>
          <Link href="/quiz" className="block py-2 hover:text-blue-600">❓ Quiz</Link>
          <Link href="/community" className="block py-2 hover:text-blue-600">👥 Community</Link>
          <button
            onClick={toggleDarkMode}
            className="w-full py-2 rounded-lg border"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}

      {/* Floating Chatbot Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        onClick={() => alert("Open AI Chatbot")}
      >
        <Bot size={24}/>
      </button>
    </nav>
  );
};

export default Navbar;
