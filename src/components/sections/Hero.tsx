import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <div className="relative isolate min-h-[90vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={`${import.meta.env.BASE_URL}images/projects/foundation-1.jpg`}
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
                className="inline-flex items-center gap-2 rounded-full bg-primary-600/90 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-accent-500"></span>
                Transforming Wollo's Skyline
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-accent-500">የእርስዎን</span> <br />
                <span className="text-primary-400">ራእይ</span> <span className="text-accent-500">ወደ እውነታ እንቀይራለን!</span>
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

          {/* CEO Image and Title */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col items-center justify-between h-full"
          >
            <div className="text-center">
              <div className="relative w-72 h-72 mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/eng_ahmed_husse.jpg`}
                  alt="Eng Ahmed Hussen Ahmed"
                  className="w-full h-full object-cover rounded-full border-[3px] border-primary-600/90 shadow-lg"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-6 text-center"
              >
                <h3 className="text-2xl font-bold text-white">CEO Eng Ahmed Hussen Ahmed</h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-8"
              >
                <Link
                  to="/profile"
                  className="btn bg-primary-600/90 text-white hover:bg-primary-500/90 border-none"
                >
                  Meet Our Chief Engineer
                  <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 