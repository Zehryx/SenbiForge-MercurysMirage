import React from 'react'
import cornerBorder from '../assets/svg/star-corner.svg'
import flatBorder   from '../assets/svg/star-border.svg'
import bgImage      from '../assets/herobackdrops/mmbackdrop.png'

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* decorative borders */}
      <div className="pointer-events-none absolute inset-0 z-10">

        {/* four corner pieces */}
        <img
          src={cornerBorder} alt=""
          className="absolute top-4 left-4 w-24 h-24"
        />
        <img
          src={cornerBorder} alt=""
          className="absolute top-4 right-4 w-24 h-24 transform rotate-90"
        />
        <img
          src={cornerBorder} alt=""
          className="absolute bottom-4 right-4 w-24 h-24 transform rotate-180"
        />
        <img
          src={cornerBorder} alt=""
          className="absolute bottom-4 left-4 w-24 h-24 transform -rotate-90"
        />

        {/* flat bars */}
        <img
          src={flatBorder} alt=""
          className="absolute top-8 left-1/2 w-[60%] -translate-x-1/2"
        />
        <img
          src={flatBorder} alt=""
          className="absolute bottom-8 left-1/2 w-[60%] -translate-x-1/2 transform rotate-180"
        />
      </div>

      {/* content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-title text-5xl md:text-7xl text-gold drop-shadow-lg">
          MERCURY’S MIRAGE
        </h1>
        <p className="mt-4 font-mono italic text-xl text-white">
          drape your reality
        </p>
        <button
          className="mt-8 px-8 py-3 font-mono uppercase tracking-wider border border-white 
                     text-white hover:bg-white hover:text-black transition duration-300"
        >
          discover
        </button>
      </div>
    </section>
  )
}
