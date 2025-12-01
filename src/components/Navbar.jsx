import React, { useState, useEffect } from "react";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${
      isScrolled ? "fixed top-0" : "sticky top-0"
    }`}>
      {/* Glass + Neon Border */}
      <div className={`
        w-full 
        backdrop-blur-xl 
        border-b 
        border-white/20 
        shadow-[0_0_25px_rgba(255,255,255,0.1)] 
        transition-all duration-300
        ${isScrolled ? "bg-white/15 shadow-[0_0_35px_rgba(0,0,0,0.2)]" : "bg-white/5"}
      `}>
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-5">

          {/* LOGO + TITLE */}
          <div className="flex items-center gap-4 group cursor-pointer">
            <img 
                src="/logo.jpg"
              alt="BOBANAD" 
              className="w-12 h-12 rounded-full shadow-lg ring-2 ring-white/20
                         group-hover:scale-105 transition-all duration-300"
            />

            <div>
              <h1 className="font-extrabold text-2xl tracking-wide text-white drop-shadow-[0_0_10px_#b47fff]">
                $BOBANAD
              </h1>
              <p className="text-[11px] text-gray-300 -mt-1 tracking-wide group-hover:text-white transition">
                Boba-Powered Kungfu on Monad
              </p>
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-8">

            <a
              href="#roadmap"
              className="
                relative text-sm text-gray-300 
                hover:text-white transition
                after:absolute after:-bottom-1 after:left-0 
                after:w-0 after:h-[2px] 
                after:bg-gradient-to-r after:from-purple-400 after:to-blue-400
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              Roadmap
            </a>

            <a
              href="#lore"
              className="
                relative text-sm text-gray-300 
                hover:text-white transition
                after:absolute after:-bottom-1 after:left-0 
                after:w-0 after:h-[2px] 
                after:bg-gradient-to-r after:from-purple-400 after:to-blue-400
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              Lore
            </a>

            {/* CTA BUY BUTTON — Premium dengan Shine Animation */}
            <a
              href="#buy"
              className="
                relative px-5 py-2.5 rounded-xl text-sm font-semibold text-white 
                bg-gradient-to-r from-purple-500 to-blue-500 
                shadow-[0_0_20px_rgba(147,51,234,0.5)]
                hover:shadow-[0_0_30px_rgba(147,51,234,0.8)]
                hover:scale-105 active:scale-95
                transition-all overflow-hidden
              "
            >
              <span className="relative z-10">Buy</span>

              {/* Shine effect */}
              <span 
                className="
                  absolute inset-0 
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  translate-x-[-150%]
                  hover:translate-x-[150%]
                  transition-transform duration-700
                "
              />
            </a>

          </div>
        </nav>
      </div>
    </header>
  );
}
