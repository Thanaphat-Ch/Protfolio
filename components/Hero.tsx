import { useScrollTo } from '@/Hooks/useScrollTo';
import { ChevronDown } from 'lucide-react';
import React from 'react'


export default function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-6 sm:px-10 lg:px-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* <div className="inline-block px-3 py-1.5 rounded-full bg-neutral-200/50 text-neutral-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              👋 สวัสดีครับ, ผมชื่อ อานนท์
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              {/* สร้างสรรค์เว็บไซต์ <br className="hidden sm:block" /> */}
              Hi, <span className="text-transparent bg-clip-text bg-linear-to-r from-neutral-500 to-neutral-900">I&apos;m Thanaphat</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0"></p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button onClick={() => scrollTo("projects")} className="px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-900 text-white text-sm sm:text-base font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:-translate-y-0.5">
                ดูผลงานของฉัน
              </button>
              {/* <div className="flex gap-3 sm:gap-4">
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Github size={20} /></a>
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Linkedin size={20} /></a>
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Mail size={20} /></a>
              </div> */}
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 cursor-pointer p-4" onClick={() => scrollTo("about")}>
            <ChevronDown size={24} />
          </div>
        </section>
  )
}
