// components/portfolio/ProjectLightbox.tsx
"use client"

import React from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { Project } from "@/types";

// 1. กำหนดประเภทของ Props ที่ต้องส่งมาจากหน้าหลัก
interface ProjectLightboxProps {
  isOpen: boolean;
  project: Project | null;
  currentImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ProjectLightbox({
  isOpen,
  project,
  currentImage,
  onClose,
  onPrev,
  onNext
}: ProjectLightboxProps) {
  
  if (!isOpen || !project || !project.screenshots) return null;

  return (
    <div className="fixed inset-0 z-999 bg-black/90 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 md:p-6 text-white">
        <div>
          <h2 className="text-lg md:text-2xl font-semibold">{project.title}</h2>
          <p className="text-white/60 text-sm mt-1">
            {currentImage + 1} / {project.screenshots.length}
          </p>
        </div>
        <button onClick={onClose} className="hover:text-white/70 transition">
          <X size={32} />
        </button>
      </div>

      {/* Image Area */}
      <div className="flex-1 flex items-center justify-center relative px-4 pb-6">
        <button onClick={onPrev} className="absolute left-2 md:left-6 z-10 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition">
          <ChevronLeft size={28} />
        </button>
        
        <Image
          src={project.screenshots[currentImage]}
          alt={project.title}
          width={1200}
          height={800}
          className="max-w-full lg:max-w-[80%] max-h-full object-contain rounded-xl shadow-2xl"
        />
        
        <button onClick={onNext} className="absolute right-2 md:right-6 z-10 bg-black/40 hover:bg-black/60 text-white p-2 md:p-3 rounded-full transition">
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}