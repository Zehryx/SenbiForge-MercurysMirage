import React from "react";

export default function Hero() {
  return (
    <div className="text-center max-w-2xl mx-auto py-16">
      <nav className="text-sm mono text-gray-400 tracking-widest uppercase mb-4">
        Mercury’s Mirage
      </nav>
      <h1 className="text-5xl md:text-6xl font-semibold mb-6 italic">Drape Your Reality</h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
        An atelier of transformation. Inspired by illusion, silhouettes, and style as spellwork.
      </p>
      <a
        href="#grid"
        className="mono inline-block border border-gray-500 px-6 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all"
      >
        Enter the Archive
      </a>
    </div>
  );
}