"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown, ExternalLink, Briefcase, User, Code, Terminal, Menu, X } from 'lucide-react';

// --- ข้อมูลจำลอง (Mock Data) ---

const EXPERIENCES = [
  {
    id: 1,
    role: "Web Developer",
    company: "",
    // period: "2023 - ปัจจุบัน",
    period: "",
    description: ""
  },
  {
    id: 2,
    role: "Mobile Application Developer",
    company: "Magnitude plus Co., Ltd.",
    // period: "2020 - 2023",
    period: "",
    description: "ฝึกงานพัฒนาแอพพลิเคชันสั่งงาน/รับงานรถบรรทุก และเว็บไซต์ admin dashboard สำหรับใช้ในองค์กร ด้วย React.js, Tailwind CSS, React Native, Node.js, express และ MySQL ร่วมมือกับเพื่อนๆในทีมเพื่อพัฒนาแอปพลิเคชันที่ตอบโจทย์ความต้องการของลูกค้า"
  },
  // {
  //   id: 3,
  //   role: "Junior Software Engineer",
  //   company: "StartUp Hub",
  //   // period: "2018 - 2020",
  //   description: "ร่วมพัฒนาแพลตฟอร์มจัดการทรัพยากรบุคคลด้วย Vue.js และ Node.js"
  // }
];

const PROJECTS = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Application",
    image: "/freelancefreely.png",
    description: "แพลตฟอร์มหางานฟรีแลนซ์ที่ช่วยเชื่อมโยงนักพัฒนากับลูกค้าที่ต้องการบริการด้านเทคโนโลยี",
    tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    link: "https://freelancefreely.vercel.app/"
  },
  {
    id: 2,
    title: "AI Crop Prediction System",
    category: "AI / Data Science",
    image: "/Crop_Prediction_System.png",
    description: "ระบบ AI คาดการณ์พืชที่เหมาะสมต่อการเพาะปลูกของแต่ละพื้นที่ โดยใช้ AI วิธี Decision Tree และข้อมูลสภาพอากาศและดินจากแหล่งข้อมูลภายนอก",
    tech: ["Python", "Streamlit"],
    link: "https://crop-prediction-system.streamlit.app/"
  },
  {
    id: 3,
    title: "Mask Detection System",
    category: "AI / Computer Vision",
    image: "/Mask_Detection_System.png",
    description: "ระบบตรวจจับการสวมใส่หน้ากากอนามัยด้วยเทคโนโลยีการประมวลผลภาพและ AI โดยใช้โมเดล YOLOv5 เพื่อวิเคราะห์ภาพจากกล้องและแจ้งเตือนหากไม่พบการสวมใส่หน้ากาก",
    tech: ["HTML", "JavaScript", "TensorFlow.js"],
    link: "https://thanaphat-ch.github.io/maskDetection/"
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
];

const SKILLS = ["JavaScript", "TypeScript", "React", "Next.js", "express.js", "Tailwind CSS", "MySQL", "Figma"];

// --- Components ---

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'portfolios'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Setup Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5 md:py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center max-w-10xl">
          <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={() => scrollTo('home')}>
            THANAPHAT.<span className="text-neutral-400">CH</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-neutral-500">
            {['About', 'Experience', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`transition-colors hover:text-neutral-900 ${activeSection === item.toLowerCase() ? 'text-neutral-900' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-5 py-2 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
          >
            ติดต่อฉัน
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-neutral-600 hover:text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-64 py-4 border-t border-neutral-100' : 'max-h-0 py-0'}`}>
          <div className="flex flex-col space-y-4 px-6">
            {['About', 'Experience', 'Projects'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-left font-medium text-neutral-600 hover:text-neutral-900 ${activeSection === item.toLowerCase() ? 'text-neutral-900' : ''}`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="w-full text-center px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors mt-2"
            >
              ติดต่อฉัน
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-12 px-6 sm:px-10 lg:px-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* <div className="inline-block px-3 py-1.5 rounded-full bg-neutral-200/50 text-neutral-600 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              👋 สวัสดีครับ, ผมชื่อ อานนท์
            </div> */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              สร้างสรรค์เว็บไซต์ <br className="hidden sm:block" />
              ด้วยความ <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-neutral-900">เรียบง่ายและทรงพลัง</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed px-4 sm:px-0">
              ผมเป็นนักพัฒนา Frontend ที่หลงใหลในการเขียนโค้ดที่สะอาด และสร้างประสบการณ์ผู้ใช้ (UX) ที่ยอดเยี่ยม ปัจจุบันเชี่ยวชาญด้าน React และ Next.js
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-neutral-900 text-white text-sm sm:text-base font-medium rounded-full hover:bg-neutral-800 transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                ดูผลงานของฉัน
              </button>
              {/* <div className="flex gap-3 sm:gap-4">
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Github size={20} /></a>
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Linkedin size={20} /></a>
                <a href="#" className="p-3 sm:p-3.5 bg-white text-neutral-700 rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 border border-neutral-100"><Mail size={20} /></a>
              </div> */}
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-400 cursor-pointer p-4" onClick={() => scrollTo('about')}>
            <ChevronDown size={24} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto reveal">
            <div className="flex items-center gap-4 mb-10 sm:mb-12">
              <div className="p-3 bg-neutral-100 rounded-xl text-neutral-700"><User size={24} /></div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">About Me</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-start">
              <div className="space-y-5 sm:space-y-6 text-neutral-600 leading-relaxed font-light text-base sm:text-lg">
                <p>
                  ผมเริ่มต้นเส้นทางสายนักพัฒนาซอฟต์แวร์เมื่อ 5 ปีที่แล้ว ด้วยความหลงใหลในการแก้ปัญหาและการสร้างสิ่งใหม่ๆ จากบรรทัดโค้ด
                </p>
                <p>
                  แนวคิดในการทำงานของผมคือ "Less is More" ผมเชื่อว่าโค้ดที่ดีควรจะอ่านง่าย บำรุงรักษาง่าย และ User Interface ควรจะใช้งานได้อย่างเป็นธรรมชาติโดยไม่ต้องมีคู่มือ
                </p>
                <p>
                  เมื่อไม่ได้อยู่หน้าจอคอมพิวเตอร์ ผมมักจะใช้เวลาไปกับการถ่ายภาพ ดริปกาแฟ และอ่านหนังสือเกี่ยวกับการออกแบบ
                </p>
              </div>

              <div className="reveal delay-100">
                <h3 className="text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2">
                  <Terminal size={18} className="text-neutral-400" />
                  ทักษะและความเชี่ยวชาญ
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {SKILLS.map(skill => (
                    <span key={skill} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-lg text-xs sm:text-sm font-medium hover:border-neutral-400 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-neutral-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-12 sm:mb-16 reveal">
              <div className="p-3 bg-white shadow-sm border border-neutral-100 rounded-xl text-neutral-700"><Briefcase size={24} /></div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Experience</h2>
            </div>

            <div className="space-y-10 sm:space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
              {EXPERIENCES.map((exp, index) => (
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

        {/* Projects Section */}
        <section id="projects" className="py-20 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-10 sm:mb-12 reveal">
              <div className="p-3 bg-neutral-100 rounded-xl text-neutral-700"><Code size={24} /></div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Project</h2>
            </div>

            {/* Adjusted gap and grid for more breathing room */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {PROJECTS.map((project, index) => (
                <div key={project.id} className="group rounded-2xl bg-neutral-50 border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col reveal" style={{ transitionDelay: `${index * 150}ms` }}>
                  {/* Reduced image height slightly (h-40) */}
                  <div className="relative h-40 sm:h-44 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                      <span className="px-2.5 py-1 bg-white/95 backdrop-blur-sm text-neutral-800 text-[10px] sm:text-xs font-semibold rounded-full shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Reduced padding inside card slightly for compactness */}
                  <div className="p-5 flex-1 flex flex-col bg-white">
                    <div className="flex justify-between items-start mb-3 sm:mb-4">
                      <h3 className="font-bold text-lg text-neutral-900 group-hover:text-neutral-600 transition-colors">{project.title}</h3>
                      <a href={project.link} className="text-neutral-400 hover:text-neutral-900 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>

                    <p className="text-neutral-600 text-xs sm:text-sm mb-5 sm:mb-6 flex-1 font-light leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] sm:text-xs font-medium text-neutral-500 bg-neutral-50 border border-neutral-200 px-2 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section id="contact" className="py-20 sm:py-24 px-6 bg-neutral-900 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 reveal">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">พร้อมที่จะร่วมงานด้วยกันหรือยัง?</h2>
            <p className="text-neutral-400 font-light text-base sm:text-lg px-4 sm:px-0">
              หากคุณกำลังมองหานักพัฒนาเว็บไซต์เพื่อสร้างสรรค์โปรเจกต์ต่อไปของคุณ สามารถติดต่อพูดคุยกันได้เลยครับ
            </p>
            <a href="mailto:thanaphat_chan@hotmail.com" className="inline-block px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-neutral-900 text-sm sm:text-base font-bold rounded-full hover:bg-neutral-200 transition-all hover:scale-105 shadow-lg shadow-white/10">
              ส่งอีเมลหาฉัน
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-6 bg-neutral-950 text-neutral-500 text-xs sm:text-sm text-center border-t border-neutral-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
          <div className="flex gap-5 sm:gap-6">
            {/* <a href="#" className="hover:text-white transition-colors">Github</a> */}
            {/* <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a> */}
            <a href="tel:+66917701746" className="hover:text-white transition-colors">
              +66 91 770 1746
            </a>
          </div>
        </div>
      </footer>

      {/* Added styles for Scroll Reveal Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        /* Scroll Reveal Classes */
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 {
          transition-delay: 100ms;
        }
      `}} />
    </div>
  );
}