'use client';
import { Brain, Network, FileSearch, Rocket } from "lucide-react";

const features = [
  {
    icon: <Brain className="w-10 h-10 text-cyan-400" />,
    title: "AI Knowledge Graphs",
    desc: "Understand relationships across NASA’s bioscience research visually.",
  },
  {
    icon: <FileSearch className="w-10 h-10 text-cyan-400" />,
    title: "AI-Powered Summaries",
    desc: "Generate concise insights from complex space biology studies.",
  },
  {
    icon: <Network className="w-10 h-10 text-cyan-400" />,
    title: "Interactive Mind Maps",
    desc: "Explore topics, subtopics, and interconnections dynamically.",
  },
  {
    icon: <Rocket className="w-10 h-10 text-cyan-400" />,
    title: "Mission Planning Support",
    desc: "Highlight research consensus and gaps to guide future missions.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Features at a Glance</h2>
        <p className="text-gray-400 text-lg">
          Empowering researchers and mission planners with intelligent visualization tools.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all border border-slate-700"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
