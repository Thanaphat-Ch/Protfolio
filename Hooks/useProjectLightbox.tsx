import { Project } from "@/types";
import { useState, useEffect, useCallback } from "react"

export function useProjectLightbox() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(() => {
    if (!selectedProject || !selectedProject.screenshots) return
    const total = selectedProject.screenshots.length
    setCurrentImage((prev) => (prev === total - 1 ? 0 : prev + 1))
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (!selectedProject || !selectedProject.screenshots) return
    const total = selectedProject.screenshots.length
    setCurrentImage((prev) => (prev === 0 ? total - 1 : prev - 1))
  }, [selectedProject])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject || !selectedProject.screenshots) return
      if (e.key === "Escape") setSelectedProject(null)
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, nextImage, prevImage])

  const openProjectPreview = (project: Project | null) => {
    setSelectedProject(project)
    setCurrentImage(0)
  }

  const closeProject = () => setSelectedProject(null)

  return { selectedProject, currentImage, nextImage, prevImage, openProjectPreview, closeProject }
}