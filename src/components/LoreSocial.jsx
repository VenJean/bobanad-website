import React from 'react'
import { motion } from 'framer-motion'

export default function LoreSocial(){
  return (
    <motion.section 
      id="lore" 
      className="mt-12 relative"
      initial={{opacity:0, y:20}} 
      animate={{opacity:1, y:0}}
      transition={{duration:0.8}}
    >
      
      {/* Mystical Aura Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bobanad/10 to-bobanad-dark/20 blur-2xl pointer-events-none"></div>

      {/* 🔥 MOBILE VERSION: Guru Bao muncul di atas lore */}
      <motion.img
        src="/apper.png"
        alt="Guru Bao"
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.7}}
        className="block lg:hidden w-48 mx-auto mb-6 drop-shadow-xl"
      />

      <div className="lore-container px-4 md:px-6 relative z-10">
        <div className="soft-card p-6 rounded-xl backdrop-blur-xl relative overflow-hidden">

          {/* Floating Mystic Energy */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-bobanad/20 blur-3xl rounded-full"></div>

          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* LORE TEXT */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-bobanad">Lore</h3>

              <p className="mt-3 text-gray-700 leading-relaxed text-lg">
                In the mystical realm of <span className="font-semibold text-bobanad-dark">Bobanad</span>, sacred boba pearls 
                hold unimaginable power — treasures capable of changing destinies.<br /><br />

                But such fortune is hidden behind danger, chaos, and ancient trials feared by most.<br /><br />

                <span className="font-semibold text-bobanad">Bao</span>, the fearless purple Monad cat, ventures into forbidden 
                mountains, celestial temples, and shadowed realms to claim the legendary Boba Treasures.<br /><br />

                Those who follow him must share the same mindset: to act boldly where others hesitate, to seize opportunity 
                where others see fear, and to step into the unknown with courage.<br /><br />

                Because in Bobanad, treasure is <span className="italic">never</span> given —<br/>
                <span className="block mt-2 text-bobanad-dark font-semibold tracking-wide">it is earned.</span><br/>

                <span className="block mt-4 text-2xl font-extrabold text-bobanad drop-shadow-sm">
                  Fortune rewards the bold.
                </span>

                <span className="block mt-1 text-xl font-black text-bobanad-dark tracking-tight animate-pulse">
                  Bao doesn’t chase safety — he chases treasure.
                </span>
              </p>
            </div>

            {/* COMMUNITY LIST */}
            <aside className="w-full lg:w-80 flex-shrink-0 relative">
              <h4 className="text-sm font-semibold text-gray-600">Community</h4>

              <div className="mt-3 flex flex-col gap-2">
                <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition"
                   href="https://x.com/B0BANAD" target="_blank" rel="noreferrer">
                  <img
                    src="/X.jpg"
                    alt="X"
                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                    onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/X.svg'}}
                  />
                  <span className="text-sm">Follow on X</span>
                </a>

                <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition"
                   href="https://t.me" target="_blank" rel="noreferrer">
                  <img
                    src="/Telegram.jpg"
                    alt="Telegram"
                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                    onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/Telegram.svg'}}
                  />
                  <span className="text-sm">Join Telegram</span>
                </a>

                <a className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition"
                   href="https://dexscreener.com" target="_blank" rel="noreferrer">
                  <img
                    src="/Dex.jpg"
                    alt="Dexscreener"
                    className="w-8 h-8 rounded-full object-cover shadow-sm"
                    onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='/Dex.svg'}}
                  />
                  <span className="text-sm">Dexscreener</span>
                </a>
              </div>

              {/* 🔥 DESKTOP VERSION: Floating guru Bao */}
              <motion.img
                src="/apper.png"
                alt="Guru Bao"
                initial={{opacity:0, rotate:20, y:40}}
                animate={{opacity:1, rotate:40, y:0}}
                transition={{duration:0.8, delay:0.3}}
                className="hidden lg:block absolute -bottom-6 right-0 w-40 md:w-48 drop-shadow-xl pointer-events-none"
                style={{transformOrigin:"center"}}
              />
            </aside>

          </div>
        </div>
      </div>

    </motion.section>
  )
}
