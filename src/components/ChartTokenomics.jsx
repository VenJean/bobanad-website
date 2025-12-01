import React from 'react'
import { motion } from 'framer-motion'

export default function ChartTokenomics(){
  return (
    <motion.section 
      className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6"
      initial={{opacity:0, y:30}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7}}
      viewport={{once:true, margin:'-50px'}}
    >

      {/* LEFT CHART AREA */}
      <motion.div 
        className="lg:col-span-2 soft-card p-4 md:p-6 rounded-xl"
        initial={{opacity:0, x:-20}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6, delay:0.1}}
        viewport={{once:true, margin:'-50px'}}
      >
        <h4 className="text-xl font-bold text-bobanad flex items-center gap-2">
          📈 Dexscreener Chart
        </h4>
        <p className="text-xs text-gray-500">
          Replace the iframe `src` with your token's Dexscreener URL.
        </p>

        <div className="mt-4">
          <iframe
            title="dexscreener-embed"
            src="https://dexscreener.com/"
            className="w-full h-96 rounded-xl border-2 border-bobanad/20 shadow-md"
          />
        </div>
      </motion.div>


      {/* TOKENOMICS */}
      <motion.aside 
        className="soft-card p-5 md:p-6 rounded-xl relative overflow-hidden"
        initial={{opacity:0, x:20}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6, delay:0.2}}
        viewport={{once:true, margin:'-50px'}}
      >

        {/* Decorative Aura Bubbles */}
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-bobanad/20 blur-2xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-bobanad-dark/20 blur-xl rounded-full"></div>

        <h4 className="text-xl font-extrabold text-bobanad flex items-center gap-2 mb-4">
          🥋 Tokenomics
        </h4>

        <ul className="space-y-4 text-sm font-medium text-gray-700 relative z-10">

          {/* Total Supply */}
          <li className="p-3 bg-white/60 rounded-lg border border-bobanad/20 shadow-sm">
            <div className="flex justify-between">
              <span>Total Supply</span>
              <strong className="text-bobanad">1,000,000,000</strong>
            </div>
            <div className="mt-2 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-bobanad to-bobanad-dark"></div>
            </div>
          </li>

          {/* Tax */}
          <li className="p-3 bg-white/60 rounded-lg border border-bobanad/20 shadow-sm">
            <span>Buy/Sell Tax</span>
            <div className="mt-1 text-bobanad-dark font-semibold">
              2% Reflections • 3% Liquidity • 0% BS
            </div>
          </li>

          {/* Liquidity */}
          <li className="p-3 bg-white/60 rounded-lg border border-bobanad/20 shadow-sm">
            <span>Liquidity Status</span>
            <div className="mt-1 text-green-600 font-semibold">🔒 Locked Forever</div>
          </li>

          {/* Chain */}
          <li className="p-3 bg-white/60 rounded-lg border border-bobanad/20 shadow-sm">
            <span>Chain</span>
            <div className="mt-1 text-bobanad font-semibold">Monad (🟣 $MONAD)</div>
          </li>

        </ul>
      </motion.aside>
    </motion.section>
  )
}
