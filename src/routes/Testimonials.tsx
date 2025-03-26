import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Mohammed Yassin",
    image: `${import.meta.env.BASE_URL}images/projects/testimonial1.jpeg`,
    text: "Working with Eng Ahmed was an exceptional experience. His attention to detail and commitment to quality is unmatched.",
    role: "Property Developer"
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
    role: "Real Estate Investor"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Testimonials
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear what our valued clients have to say about their experience working with AHA Construction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 