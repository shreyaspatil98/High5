'use client';
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-cyan-800 via-slate-800 to-black text-white py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Explore Space Biology?</h2>
      <p className="text-gray-300 mb-8">
        Join the AI-powered research experience and uncover hidden insights from NASA’s bioscience database.
      </p>
      <Link href="/publication">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-full font-semibold transition">
          Start Exploring
        </button>
      </Link>
    </section>
  );
}
