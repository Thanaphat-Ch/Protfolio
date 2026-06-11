"use client"

import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Experience from "./Experience"
import Projects from "./Projects/Projects"
import Lightbox from "./Projects/Lightbox"
import { PortfolioProps, Project } from "@/types"
import { useState } from "react";
import useScrollReveal from "@/Hooks/useRevealAnimation";
import Contact from "./Contact";
import Footer from "./Footer";

export default function PortfolioClient({
  projects,
  experiences,
  skills,
}: PortfolioProps) {
  useScrollReveal()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />

      <Hero />
      <About skills={skills} />
      <Experience experiences={experiences} />

      <Projects projects={projects} onOpen={(project) => {
        setSelectedProject(project)
        setCurrentImage(0)
      }} />

      <Contact />
      <Footer />
      <Lightbox
        project={selectedProject}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  )
}
