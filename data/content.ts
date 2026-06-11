import type { Experience, Project } from "@/types";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiExpress, SiMysql, SiFigma } from "react-icons/si"
import { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType;
  color: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: "Mobile Application Developer",
    company: "Magnitude plus Co., Ltd.",
    period: "2025",
    description: "ฝึกสหกิจพัฒนาแอพพลิเคชันสั่งงาน/รับงานรถบรรทุก และเว็บไซต์ admin dashboard สำหรับใช้ในองค์กร ด้วย React.js, Tailwind CSS, React Native, Node.js, express และ MySQL ร่วมมือกับเพื่อนๆในทีมเพื่อพัฒนาแอปพลิเคชันที่ตอบโจทย์ความต้องการของลูกค้า",
  },
  {
    id: 2,
    role: "Web Developer",
    company: "",
    period: "2025 - 2026",
    description: "โปรเจกต์จบ พัฒนาเว็บไซต์หางานฟรีแลนซ์ที่ช่วยเชื่อมโยงนักพัฒนากับลูกค้าที่ต้องการบริการด้านเทคโนโลยี โดยใช้ React, JavaScript, Tailwind CSS, Node.js, Express และ MongoDB",
  },
]


export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "/freelancefreely/freelancefreely.png",
    description: "แพลตฟอร์มหางานฟรีแลนซ์ที่ช่วยเชื่อมโยงนักพัฒนากับลูกค้าที่ต้องการบริการด้านเทคโนโลยี",
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "https://freelancefreely.vercel.app/",
    screenshots: ["/freelancefreely/1.png", "/freelancefreely/2.png", "/freelancefreely/3.png", "/freelancefreely/4.png", "/freelancefreely/5.png"],
  },
  {
    id: 2,
    title: "AI Crop Prediction System",
    category: "AI / Data Science",
    image: "/Crop_Prediction_System.png",
    description: "ระบบ AI คาดการณ์พืชที่เหมาะสมต่อการเพาะปลูกของแต่ละพื้นที่ โดยใช้ AI วิธี Decision Tree และข้อมูลสภาพอากาศและดินจากแหล่งข้อมูลภายนอก",
    tech: ["Python", "Streamlit"],
    link: "https://crop-prediction-system.streamlit.app/",
  },
  {
    id: 3,
    title: "Mask Detection System",
    category: "AI / Computer Vision",
    image: "/Mask_Detection_System.png",
    description: "ระบบตรวจจับการสวมใส่หน้ากากอนามัยด้วยเทคโนโลยีการประมวลผลภาพและ AI โดยใช้โมเดล YOLOv5 เพื่อวิเคราะห์ภาพจากกล้องและแจ้งเตือนหากไม่พบการสวมใส่หน้ากาก",
    tech: ["HTML", "JavaScript", "TensorFlow.js"],
    link: "https://thanaphat-ch.github.io/maskDetection/",
  },
  // {
  //   id: 4,
  //   title: "Mask Detection System",
  //   category: "AI / Computer Vision",
  //   image: "/Mask_Detection_System.png",
  //   description: "ระบบตรวจจับการสวมใส่หน้ากากอนามัยด้วยเทคโนโลยีการประมวลผลภาพและ AI โดยใช้โมเดล YOLOv5 เพื่อวิเคราะห์ภาพจากกล้องและแจ้งเตือนหากไม่พบการสวมใส่หน้ากาก",
  //   tech: ["JavaScript", "TensorFlow.js", "YOLOv5"],
  //   link: "https://thanaphat-ch.github.io/maskDetection/"
  // }
]


export const SKILLS: Skill[] = [
  { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS", icon: SiCss, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: SiReact, color: "text-sky-400" },
  { name: "React Native", icon: SiReact, color: "text-sky-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "express.js", icon: SiExpress, color: "text-gray-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-800" },
  // { name: "Figma", icon: SiFigma, color: "text-pink-500" },
];