import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50 py-24 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-primary-800 sm:text-6xl">
            Coming Soon
          </h1>
          <p className="mt-6 text-lg leading-8 text-secondary-600">
            We're working hard to bring you more detailed information about our services. 
            Check back soon for updates!
          </p>
          <div className="mt-10">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 rounded-full bg-[#0095FF] px-6 py-3 text-white hover:bg-[#0095FF]/90 transition-colors"
            >
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 