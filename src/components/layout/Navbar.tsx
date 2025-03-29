import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu when clicking outside
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#2563EB] shadow-lg">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-white">
          <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21M3 18H21M6 18V13M10 18V13M14 18V13M18 18V13M5 13H19C19.5523 13 20 12.5523 20 12V4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4V12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold"><span className="text-white font-black">AHA</span> Construction</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </Link>
          <a href="#about" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
          <a href="#services" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'services')}>
            Services
          </a>
          <a href="#projects" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </a>
          <a href="#news" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'news')}>
            News
          </a>
          <a href="#testimonials" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'testimonials')}>
            Testimonials
          </a>
          <a href="#contact" className="px-4 py-2 text-white hover:text-white/80" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
          <Link 
            to="/profile" 
            className="ml-4 rounded-full bg-white px-4 py-2 text-[#2563EB] hover:bg-white/90"
          >
            Meet our Chief Engineer
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative rounded-full p-2.5 text-white hover:bg-white/10 transition-colors duration-200 md:hidden"
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          }}
        >
          <span className="sr-only">Open menu</span>
          <div className="relative h-5 w-5">
            <motion.span
              className="absolute left-0 top-0 h-0.5 w-5 bg-white rounded-full"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 10 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 top-[10px] h-0.5 w-5 bg-white rounded-full"
              animate={{
                opacity: isOpen ? 0 : 1,
                x: isOpen ? -20 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute left-0 bottom-0 h-0.5 w-5 bg-white rounded-full"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -10 : 0,
              }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </motion.button>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 md:hidden z-40" 
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-x-0 top-full bg-[#2563EB] p-6 md:hidden z-50 shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <Link 
                  to="/" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg" 
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Home
                </Link>
                <a 
                  href="#about" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg" 
                  onClick={(e) => handleNavClick(e, 'about')}
                >
                  About
                </a>
                <a 
                  href="#services" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg" 
                  onClick={(e) => handleNavClick(e, 'services')}
                >
                  Services
                </a>
                <a 
                  href="#projects" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg" 
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  Projects
                </a>
                <a 
                  href="#news" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg"
                  onClick={(e) => handleNavClick(e, 'news')}
                >
                  News
                </a>
                <a 
                  href="#testimonials" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg"
                  onClick={(e) => handleNavClick(e, 'testimonials')}
                >
                  Testimonials
                </a>
                <a 
                  href="#contact" 
                  className="text-white hover:text-white/80 transition-colors duration-200 text-lg" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                >
                  Contact
                </a>
                <Link 
                  to="/profile" 
                  className="mt-2 rounded-full bg-white px-6 py-3 text-center text-[#2563EB] hover:bg-white/90 transition-colors duration-200 text-lg font-medium shadow-md hover:shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Meet our Chief Engineer
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </nav>
    </header>
  );
} 