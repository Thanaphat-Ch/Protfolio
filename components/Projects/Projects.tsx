import { useEffect } from "react";
import ProjectCard from "./ProjectCard"
import type { Project } from "@/types"
import { Code } from "lucide-react";

type Props = {
  projects: Project[]
  onOpen: (project: Project) => void
}

export default function Projects({ projects, onOpen }: Props) {
    useEffect(() => {
        console.log("Projects component rendered with projects:", projects);
    });
  return (
    <section id="projects" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10 sm:mb-12 reveal">
              <div className="p-3 bg-neutral-100 rounded-xl text-neutral-700">
                <Code size={24} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Project</h2>
            </div>

        <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} />
            ))}
        </div>
      </div>
    </section>
  )
}

