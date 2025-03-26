import { motion } from 'framer-motion';

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

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Client Testimonials
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Hear what our valued clients have to say about their experience working with AHA Construction.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <div className="group h-full flex flex-col relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-green-600">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-blue-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="flex-1">
                    <p className="text-base italic text-gray-600 leading-relaxed">"{testimonial.text}"</p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a href="/" className="btn">
            Back to Home
          </a>
        </motion.div>
      </div>
    </div>
  );
} 