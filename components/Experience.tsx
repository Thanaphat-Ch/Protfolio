import React from 'react'
import { Briefcase } from 'lucide-react'
import { Experience as ExperienceType } from '@/types';

export default function Experience( { experiences }: { experiences: ExperienceType[] }) {
  return (
    <section id="experience" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12 sm:mb-16 reveal">
              <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-xl text-neutral-700">
                <Briefcase size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-10 sm:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
              {experiences.map((exp, index) => (
                <div key={exp.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-neutral-50 bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className="w-2 h-2 bg-neutral-400 rounded-full group-hover:bg-neutral-800 transition-colors"></div>
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 sm:p-6 rounded-2xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                      <h3 className="font-bold text-base sm:text-lg text-neutral-900">{exp.role}</h3>
                      <span className="text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full inline-block w-fit">{exp.period}</span>
                    </div>
                    <div className="text-neutral-500 text-sm font-medium mb-3 sm:mb-4">{exp.company}</div>
                    <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-light">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}
