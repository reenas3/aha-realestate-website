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
      text: "Working with Eng Ahmed was an exceptional experience. His attention to detail and commitment to quality is unmatched."
    },
    {
      id: 2,
      name: "Mohammed Adem",
      image: `${import.meta.env.BASE_URL}images/projects/testimonial2.JPG`,
      text: "The professionalism and expertise demonstrated by AHA Construction exceeded our expectations."
    },
    {
      id: 3,
      name: "Bushira Awol",
      image: `${import.meta.env.BASE_URL}images/projects/testimonial3.JPG`,
      text: "Eng Ahmed's innovative approach and dedication to excellence made our project a great success."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}images/projects/mysresidence.JPG`}
          alt="Construction site"
          className="h-full w-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative py-24 sm:py-32 lg:py-40">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
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
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                Transforming Wollo's Skyline
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-blue-500">የእርስዎን</span> <br />
                <span className="text-primary-400">ራእይ</span> <span className="text-blue-500">ወደ እውነታ እንቀይራለን!</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 text-lg leading-8 text-gray-300"
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
                className="mt-12 grid grid-cols-3 gap-8 border-t border-white/20 pt-8"
              >
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="mt-1 text-sm text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">13+</div>
                  <div className="mt-1 text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="mt-1 text-sm text-gray-300">Client Satisfaction</div>
                </div>
              </motion.div>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6"
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
          <div className="flex flex-col space-y-8">
            {/* Engineer Image and Title */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <div className="text-center">
                <div className="relative w-72 h-72 mx-auto">
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
                  className="mt-6 text-center"
                >
                  <h3 className="text-2xl font-bold text-white">Eng Ahmed Hussen Ahmed</h3>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="mt-8"
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
              className="relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
            >
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center space-x-4"
              >
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                />
                <div>
                  <p className="text-sm text-gray-300 italic">"{testimonials[currentTestimonial].text}"</p>
                  <h4 className="mt-2 text-white font-semibold">{testimonials[currentTestimonial].name}</h4>
                </div>
              </motion.div>
              <div className="mt-4 flex justify-center space-x-2">
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 