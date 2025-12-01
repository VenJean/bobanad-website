import React from 'react'

export default function MascotSVG({className='w-full h-auto'}){
  return (
    <svg className={className} viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#ffd6f0" />
          <stop offset="100%" stopColor="#f7e8ff" />
        </linearGradient>
      </defs>
      <rect width="320" height="320" rx="32" fill="url(#g1)" />
      <g transform="translate(40,40)">
        <circle cx="120" cy="90" r="64" fill="#fff" stroke="#e8d7ee" strokeWidth="4" />
        <path d="M56 110 Q120 170 184 110" fill="#fff" stroke="#f1d8f0" strokeWidth="4" />
        <circle cx="96" cy="80" r="8" fill="#2b1b2b" />
        <circle cx="144" cy="80" r="8" fill="#2b1b2b" />
        <path d="M102 96 Q120 110 138 96" stroke="#2b1b2b" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <g transform="translate(88,34)">
          <rect x="-6" y="-16" width="44" height="12" rx="6" fill="#ffd27a" stroke="#e6a24d" />
          <rect x="10" y="-26" width="8" height="36" rx="4" fill="#ffd27a" />
        </g>
        <g transform="translate(64,132)">
          <path d="M0 0 Q40 24 80 0" fill="#ffd6f0" stroke="#f0b5d8" strokeWidth="3" />
        </g>
      </g>
    </svg>
  )
}
