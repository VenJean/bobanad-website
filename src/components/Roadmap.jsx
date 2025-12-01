import React from 'react'
import { motion } from 'framer-motion'

const phases = [
  {
    title: 'Phase 1 — Hatch',
    icon: '🥚',
    desc: 'The journey begins. Bao awakens and takes his first step toward the Boba Treasures.',
    items: ['Token Launch', 'Website Release', 'Initial Liquidity', 'Social Setup']
  },
  {
    title: 'Phase 2 — Train',
    icon: '🥋',
    desc: 'Bao sharpens his kungfu. The clan grows stronger around him.',
    items: ['Community Expansion', 'KOL Push', 'Listings', 'Lore Updates', 'Giveaways']
  },
  
  {
    title: 'Phase 3 — Ascend',
    icon: '⚔️',
    desc: 'Bao enters the mystical realms. The Boba Treasures begin to reveal themselves.',
    items: ['Major Marketing', 'Partnerships', 'Utility Rollouts', 'Mini-Games']
  },
  {
    title: 'Phase 4 — Legend',
    icon: '🐉',
    desc: 'Bao achieves mythical power. The Bobanad Realm evolves into a full ecosystem.',
    items: ['DAO Governance', 'Ecosystem Expansion', 'Advanced Tools', 'Charity Drops']
  }
]

export default function Roadmap(){
  return (
    <motion.section 
      id="roadmap" 
      className="mt-16 soft-card p-8 rounded-2xl relative overflow-hidden"
      initial={{opacity:0, y:40}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.8}}
      viewport={{once:true, margin:'-50px'}}
    >

      {/* Background Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-bobanad/10 to-bobanad-dark/10 blur-3xl pointer-events-none"></div>

      <h3 className="text-3xl font-extrabold text-bobanad mb-6 text-center">
        🗺️ Bobanad Roadmap
      </h3>

      <div className="relative border-l-4 border-bobanad/40 ml-4 space-y-10">

        {phases.map((phase, i)=> (
          <motion.div 
            key={i} 
            className="relative pl-10"
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:0.5, delay:i*0.15}}
            viewport={{once:true, margin:'-50px'}}
          >

            {/* Timeline Dot */}
            <div className="absolute -left-6 top-1 w-10 h-10 rounded-full bg-white shadow-lg border-2 border-bobanad flex items-center justify-center text-xl">
              {phase.icon}
            </div>

            {/* Card */}
            <div className="p-5 bg-white/70 backdrop-blur-xl rounded-xl border border-bobanad/20 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h4 className="text-xl font-bold text-bobanad-dark">{phase.title}</h4>
              <p className="mt-1 text-gray-700 text-sm">{phase.desc}</p>

              <ul className="mt-3 text-sm text-gray-700 space-y-1">
                {phase.items.map((it, j)=> (
                  <li key={j} className="flex items-center gap-2">
                    <span className="text-bobanad-dark">•</span> {it}
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        ))}

      </div>
    </motion.section>
  )
}
