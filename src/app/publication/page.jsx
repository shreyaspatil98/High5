<<<<<<< HEAD:src/app/page.js
"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PublicationsList from "../components/PublicationsList";
import ParticleBackground from "../components/ParticleBackground";
import Footer from "../components/Footer"; // <-- import Footer
=======
import PublicationsList from '../../components/PublicationsList';
>>>>>>> 70ffcf172bd76b8498c4f3d6bf5c4aefb44dae25:src/app/publication/page.jsx

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const handleSearchSubmit = (e) => e.preventDefault();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroLogoSize = 120;
  const navbarLogoSize = 40;
  const maxScroll = 200;
  const scrollFactor = Math.min(scrollY / maxScroll, 1);

  const logoScale = heroLogoSize - (heroLogoSize - navbarLogoSize) * scrollFactor;
  const heroLogoOpacity = 1 - scrollFactor;
  const navbarLogoOpacity = scrollFactor;

  return (
    <main className="min-h-screen text-white flex flex-col items-center relative">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navbar */}
      <div className="w-full fixed top-0 left-0 z-50 flex items-center justify-between px-6 sm:px-8 h-20 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <Navbar logoInNavbarOpacity={navbarLogoOpacity} />
      </div>

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center w-full relative"
        style={{ minHeight: "120vh" }}
      >
        {/* Hero Logo */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-100"
          style={{
            top: 80,
            opacity: heroLogoOpacity,
            transform: `scale(${logoScale / heroLogoSize})`,
            transformOrigin: "top center",
          }}
        >
          <img
            src="/download.png"
            alt="Logo"
            width={logoScale}
            height={logoScale}
            className="rounded-full shadow-lg"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 text-center">
          Space Bio Knowledge Engine
        </h1>

        {/* Search Bar */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center w-full max-w-xl bg-white rounded-full shadow-md hover:shadow-lg transition-shadow px-4 py-2 mt-8"
        >
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search publications..."
            className="flex-grow text-gray-900 text-lg outline-none px-2 py-2 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors ml-3"
          >
            Search
          </button>
        </form>
      </div>

      {/* Publications List */}
      <PublicationsList searchTerm={searchTerm} />

      {/* Footer */}
      <Footer />  {/* <-- Add Footer here */}
    </main>
  );
}
