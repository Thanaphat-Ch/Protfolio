import React from 'react'

export default function Footer() {
  return (
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
  )
}
