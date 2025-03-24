import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0095FF] shadow-lg">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21M3 18H21M6 18V13M10 18V13M14 18V13M18 18V13M5 13H19C19.5523 13 20 12.5523 20 12V4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4V12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold">AHA Construction</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/" className="px-4 py-2 text-white hover:text-white/80">
            Home
          </Link>
          <a href="#about" className="px-4 py-2 text-white hover:text-white/80">
            About
          </a>
          <a href="#services" className="px-4 py-2 text-white hover:text-white/80">
            Services
          </a>
          <a href="#projects" className="px-4 py-2 text-white hover:text-white/80">
            Projects
          </a>
          <a href="#contact" className="px-4 py-2 text-white hover:text-white/80">
            Contact
          </a>
          <Link 
            to="/profile" 
            className="ml-4 rounded-full bg-white px-4 py-2 text-[#0095FF] hover:bg-white/90"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
        >
          <span className="sr-only">Open menu</span>
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute inset-x-0 top-full bg-[#0095FF] p-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/" className="text-white hover:text-white/80">
                Home
              </Link>
              <a href="#about" className="text-white hover:text-white/80">
                About
              </a>
              <a href="#services" className="text-white hover:text-white/80">
                Services
              </a>
              <a href="#projects" className="text-white hover:text-white/80">
                Projects
              </a>
              <a href="#contact" className="text-white hover:text-white/80">
                Contact
              </a>
              <Link 
                to="/profile" 
                className="rounded-full bg-white px-4 py-2 text-center text-[#0095FF] hover:bg-white/90"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 