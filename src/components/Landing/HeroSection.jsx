'use client';
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-cyan-900 to-black text-white py-32 px-6 text-center overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6">
          NASA Bioscience AI Dashboard
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-10">
          Visualize scientific knowledge, uncover gaps, and accelerate research with AI-powered insights from NASA’s bioscience archives.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/publications">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition">
              Explore Publications
            </button>
          </Link>
          <Link href="/quiz">
            <button className="border border-cyan-400 hover:bg-cyan-400/20 px-6 py-3 rounded-full font-semibold text-cyan-300 transition">
              Take a Space Quiz
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)]"></div>
    </section>
  );
}
