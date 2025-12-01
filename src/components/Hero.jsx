import React from 'react'
import { motion } from 'framer-motion'
import Ticker from './Ticker'

export default function Hero(){
  return (
    <section className="pt-8 md:pt-24 hero-bg py-8 md:py-12 -mx-6 md:-mx-8 px-6 md:px-8 relative z-10">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}} className="w-full">
            <div className="soft-card p-4 md:p-6 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-extrabold text-bobanad">$BOBANAD</h2>
              <p className="text-sm md:text-base text-gray-600 mt-2">“Bao doesn’t chase safety. He chases treasure.”</p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Ticker />
                <div id="buy" className="rounded-lg soft-card p-4 purple-glow flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-gray-500">Buy on</div>
                    <div className="font-semibold">PancakeSwap</div>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <a className="flex-1 text-center px-3 py-2 bg-bobanad text-white rounded-md hover:scale-105 transition transform" href="#">Buy</a>
                    <a className="flex-1 text-center px-3 py-2 border rounded-md text-sm text-gray-600 hover:text-bobanad transition" href="#chart">Chart</a>
                  </div>
                </div>
              </div>
            </div>

            
              {/* CONTRACT ADDRESS (FULL NEW SECTION) */}
              <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-purple-600 to-bobanad text-white shadow-md text-sm relative overflow-hidden group">

                <div className="font-bold tracking-wide flex items-center gap-2">
                  CA:
                  <img 
                    src="/boba.png"
                    alt="boba"
                    className="w-4 h-4 drop-shadow-md animate-bounce-slow"
                  />
                </div>

                <div 
                  className="break-all text-xs md:text-sm opacity-90 mt-1 select-text" 
                  id="contractValue"
                >
                  19ASh2k1Mpunnsmp82Njafaskjd8281iiu1392
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("0x0000000000000000000000000000000000000000");
                  }}
                  className="absolute top-3 right-3 bg-white/20 hover:bg-white/30 active:scale-95 transition rounded-md p-1 flex items-center gap-1 backdrop-blur-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#ffffff" d="M21 8.94a1.31 1.31 0 0 0-.06-.27v-.09a1.07 1.07 0 0 0-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19a.32.32 0 0 0-.09 0a.88.88 0 0 0-.33-.11H10a3 3 0 0 0-3 3v1H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-1h1a3 3 0 0 0 3-3V8.94Zm-6-3.53L17.59 8H16a1 1 0 0 1-1-1ZM15 19a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h1v7a3 3 0 0 0 3 3h5Zm4-4a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v3a3 3 0 0 0 3 3h3Z"/></svg>
                </button>


                {/* Floating Boba Decoration */}
                <img
                  src="/boba.png"
                  alt="floating boba"
                  className="w-6 h-6 absolute -bottom-2 -right-2 opacity-20 rotate-12 group-hover:opacity-40 transition duration-300"
                />
            </div>


            {/* Mascot di bawah (mobile) */}
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="lg:hidden mt-6">
              <img 
                src="/maskot.png"
                alt="Hero Mascot"
                className="w-full max-w-sm mx-auto drop-shadow-xl animate-float"
              />
            </motion.div>
          </motion.div>

          {/* Mascot bebas di kanan (desktop only) */}
          <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1,scale:1}} transition={{delay:0.2, duration:0.6}} className="hidden lg:flex justify-center items-start pt-4">
            <div className="relative">
              <img 
                src="/maskot.png"
                alt="Hero Mascot"
                className="w-full max-w-sm drop-shadow-2xl animate-float"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
