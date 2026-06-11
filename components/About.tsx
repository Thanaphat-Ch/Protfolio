import React from 'react'
import { User, Terminal } from 'lucide-react'

type AboutProps = {
  skills: string[]
}

export default function About( { skills }: AboutProps) {
  return (
    <section id="about" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto reveal">
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <div className="p-3 bg-neutral-100 rounded-xl text-neutral-700">
                <User size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
              <div className="space-y-5 sm:space-y-6 text-neutral-600 leading-relaxed font-light text-base sm:text-lg">
                <p>
                  ผมนักศึกษาจบใหม่ สาขาวิทยาการคอมพิวเตอร์ที่มีความชื่นชอบในการพัฒนาเว็บไซต์และแอปพลิเคชันมือถือ ด้วยประสบการณ์การฝึกสหกิจที่บริษัท Magnitude plus Co., Ltd. ผมได้มีโอกาสทำงานกับเทคโนโลยีต่างๆ เช่น React.js, Tailwind CSS, React Native, Node.js, express และ MySQL
                  ซึ่งช่วยให้ผมสามารถสร้างสรรค์โปรเจกต์ที่ตอบโจทย์ความต้องการของลูกค้าได้อย่างมีประสิทธิภาพ
                </p>
                {/* <p>
                  แนวคิดในการทำงานของผมคือ "Less is More" ผมเชื่อว่าโค้ดที่ดีควรจะอ่านง่าย บำรุงรักษาง่าย และ User Interface ควรจะใช้งานได้อย่างเป็นธรรมชาติโดยไม่ต้องมีคู่มือ
                </p> */}
                {/* <p>
                  เมื่อไม่ได้อยู่หน้าจอคอมพิวเตอร์ ผมมักจะใช้เวลาไปกับการถ่ายภาพ ดริปกาแฟ และอ่านหนังสือเกี่ยวกับการออกแบบ
                </p> */}
              </div>

              <div className="reveal delay-100">
                <h3 className="text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2">
                  <Terminal size={18} className="text-neutral-400" />
                  ทักษะและความเชี่ยวชาญ
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-lg text-xs sm:text-sm font-medium hover:border-neutral-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}
