'use client';

export default function DemoVideoSection() {
  return (
    <section className="bg-black text-white py-24 px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">See It in Action 🚀</h2>
      <p className="text-gray-400 max-w-3xl mx-auto mb-10">
        Watch a quick demo showcasing how NASA’s bioscience knowledge is visualized through AI and interactive graphs.
      </p>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-700">
          <iframe
            src="https://player.vimeo.com/video/76979871?h=8272103f6e"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="NASA Bioscience Demo"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
