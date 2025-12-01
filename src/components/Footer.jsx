import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 relative overflow-hidden border-t py-10 bg-white">

      {/* Decorative Background Image (desktop only) */}
      <div 
        className="hidden lg:block pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 opacity-100"
      >
        <img 
          src="/src/assets/ms.png" 
          alt="footer art"
          className="w-[100px] h-auto object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left side */}
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/logo.jpg" 
              alt="logo" 
              className="w-10 h-10 rounded-full object-cover shadow-md" 
            />
            <div>
              <div className="font-semibold text-bobanad-dark">$BOBANAD</div>
              <div className="text-xs text-gray-500">
                Boba-Powered Kungfu on Monad • © {new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Right side description */}
          <div className="text-sm text-gray-600 text-center md:text-right max-w-sm leading-relaxed">
            Professional footer crafted for investor trust.<br />
            Audit • Security • Integrations — coming soon.
          </div>

        </div>
      </div>
    </footer>
  )
}
