import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Mohammed Yassin",
      image: `${import.meta.env.BASE_URL}images/projects/testimonial1.jpeg`,
      text: "Working with Eng Ahmed was an exceptional experience. His attention to detail and commitment to quality is unmatched.",
      role: "Business Owner"
    },
    {
      id: 2,
      name: "Mohammed Adem",
      image: `${import.meta.env.BASE_URL}images/projects/testimonial2.JPG`,
      text: "The professionalism and expertise demonstrated by AHA Construction exceeded our expectations.",
      role: "Business Owner"
    },
    {
      id: 3,
      name: "Bushira Awol",
      image: `${import.meta.env.BASE_URL}images/projects/testimonial3.JPG`,
      text: "Eng Ahmed's innovative approach and dedication to excellence made our project a great success.",
      role: "Business Owner"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}images/projects/mysresidence.JPG`}
          alt="Construction site"
          className="h-full w-full object-cover object-center brightness-110 min-h-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      </div>

      {/* Content */}
      <div className="container relative py-8 sm:py-16 lg:py-24">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-white flex flex-col justify-between h-full"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                Transforming Wollo's Skyline
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-4 text-3xl font-black tracking-tight sm:text-5xl lg:text-7xl"
              >
                <span className="text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">የእርስዎን</span> <br />
                <span className="text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ራእይ</span>{' '}
                <span className="text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ወደ እውነታ እንቀይራለን!</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-gray-300"
              >
                With over a decade of construction excellence in Dessie, Kombolcha, and Gerba, we bring expertise, 
                quality, and innovation to every project. From foundation to finish, we're your 
                trusted partner in construction.
              </motion.p>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/20 pt-6 sm:pt-8"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">13+</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                  <div className="mt-1 text-xs sm:text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <a
                href="#projects"
                className="btn"
              >
                <span className="relative flex items-center gap-2">
                  View Our Projects
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column with Engineer Image and Testimonials */}
          <div className="flex flex-col space-y-6 sm:space-y-8 mt-8 lg:mt-0">
            {/* Engineer Image and Title */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="text-center">
                <div className="relative w-48 h-48 sm:w-72 sm:h-72 mx-auto">
                  <img
                    src={`${import.meta.env.BASE_URL}images/eng_ahmed_husse.jpg`}
                    alt="Eng Ahmed Hussen Ahmed"
                    className="w-full h-full object-cover rounded-full border-[3px] border-blue-600 shadow-lg"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="mt-4 sm:mt-6 text-center"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Eng Ahmed Hussen Ahmed</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="mt-6 sm:mt-8"
                >
                  <Link
                    to="/profile"
                    className="btn bg-blue-600 text-white hover:bg-blue-500 border-none"
                  >
                    Meet Our Chief Engineer
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="relative overflow-hidden rounded-xl bg-white/5 p-4 sm:p-6 backdrop-blur-sm"
            >
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-3 sm:space-x-4"
              >
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-green-400"
                />
                <div>
                  <p className="text-xs sm:text-sm text-gray-300 italic">"{testimonials[currentTestimonial].text}"</p>
                  <h4 className="mt-2 text-sm sm:text-base text-white font-semibold">
                    <span className="text-green-400">{testimonials[currentTestimonial].name}</span>
                    <span className="text-xs text-gray-400 ml-2">{testimonials[currentTestimonial].role}</span>
                  </h4>
                </div>
              </motion.div>
              <div className="mt-3 sm:mt-4 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/testimonials"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  View All Testimonials →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 