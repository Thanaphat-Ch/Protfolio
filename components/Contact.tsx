import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 px-6 bg-neutral-900 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">พร้อมที่จะร่วมงานด้วยกันหรือยัง?</h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg px-4 sm:px-0">หากคุณกำลังมองหานักพัฒนาเว็บไซต์เพื่อสร้างสรรค์โปรเจกต์ต่อไปของคุณ สามารถติดต่อพูดคุยกันได้เลยครับ</p>
            <a href="mailto:thanaphat_chan@hotmail.com" className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-neutral-900 text-sm sm:text-base font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10">
              ส่งอีเมลหาฉัน
            </a>
          </div>
     </section>
  )
}
