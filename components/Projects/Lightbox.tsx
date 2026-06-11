"use client"

import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import type { Project } from "@/types"

type Props = {
  project: Project | null
  currentImage: number
  setCurrentImage: React.Dispatch<React.SetStateAction<number>>
  onClose: () => void
}

export default function Lightbox({
  project,
  currentImage,
  setCurrentImage,
  onClose,
}: Props) {
  if (!project) return null

  const images = project.screenshots ?? []

  const nextImage = () => {
    setCurrentImage((p) =>
      p >= images.length - 1 ? 0 : p + 1
    )
  }

  const prevImage = () => {
    setCurrentImage((p) =>
      p <= 0 ? images.length - 1 : p - 1
    )
  }

  const src = images[currentImage] ?? images[0]

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 text-white">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold">
            {project.title}
          </h2>

          <p className="text-white/60 text-sm mt-1">
            {currentImage + 1} / {images.length}
          </p>
        </div>

        <button
          onClick={onClose}
          className="hover:text-white/70 transition"
        >
          <X size={32} />
        </button>
      </div>

      {/* Image Area */}
      <div className="flex-1 flex items-center justify-center relative px-4 pb-6">

        {/* Prev */}
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-6 z-10 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image */}
        <Image
          src={src}
          alt={project.title}
          width={1200}
          height={800}
          className="max-w-full lg:max-w-[80%] max-h-full object-contain rounded-xl shadow-2xl"
        />

        {/* Next */}
        <button
          onClick={nextImage}
          className="absolute right-2 md:right-6 z-10 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition"
        >
          <ChevronRight size={28} />
        </button>

      </div>
    </div>
  )
}