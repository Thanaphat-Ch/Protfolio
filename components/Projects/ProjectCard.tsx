"use client"

import { ExternalLink } from "lucide-react"
import type { Project } from "@/types"

type Props = {
  project: Project
  onOpen: (project: Project) => void
}

export default function ProjectCard({ project, onOpen }: Props) {
  const hasScreenshots = project.screenshots?.length > 0

  return (
    <div
      onClick={() => {
        if (hasScreenshots) {
          onOpen(project)
        }
      }}
      className={`
        group rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden
        transition-all duration-500 flex flex-col
        ${hasScreenshots ? "cursor-pointer hover:shadow-xl hover:-translate-y-2" : "cursor-default opacity-90"}
      `}
    >
      {/* Image */}
      <div className="relative h-40 sm:h-44 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 bg-white/95 text-neutral-800 text-xs font-semibold rounded-full shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col bg-white">

        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-lg text-neutral-900 group-hover:text-neutral-600 transition-colors">
            {project.title}
          </h3>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-neutral-400 hover:text-neutral-900 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        </div>

        <p className="text-neutral-600 text-sm mb-5 flex-1 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 px-2 py-1 rounded-md"
            >
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}