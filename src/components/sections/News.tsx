import { motion } from 'framer-motion';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

interface NewsItem {
  id: number;
  date: string;
  title: string;
  content: string;
  tag: string;
}

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Load news items from localStorage
    const savedNews = localStorage.getItem('newsItems');
    if (savedNews) {
      setNewsItems(JSON.parse(savedNews));
    }
  }, []);

  return (
    <section id="news" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about our latest projects, announcements, and company updates.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-4">
                  {item.tag}
                </span>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.content}
                </p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center gap-1">
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 