import { motion } from 'framer-motion';
import { BuildingOffice2Icon, UserGroupIcon, MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Expert Engineering',
    description: 'Specialized in concrete structures and foundations with advanced engineering expertise for commercial buildings.',
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Professional Team',
    description: 'Highly skilled construction professionals with extensive experience in commercial building development.',
    icon: UserGroupIcon,
  },
  {
    name: 'Strategic Location',
    description: 'Strategically located in Dessie, Kombolcha, and Gerba, serving the growing commercial development needs of the region.',
    icon: MapPinIcon,
  },
  {
    name: 'Quality Assurance',
    description: 'Rigorous quality control processes ensuring every project meets the highest construction standards.',
    icon: ShieldCheckIcon,
  },
];

export default function About() {
  return (
    <div id="about" className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),white)]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold tracking-tight text-primary-800 sm:text-5xl"
          >
            About AHA Construction
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-lg leading-8 text-secondary-700"
          >
            Founded with a vision to transform commercial spaces, AHA Construction specializes in developing robust concrete structures that stand the test of time. Our expertise in foundation work and structural engineering sets new standards in commercial building development.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-primary-800 shadow-xl lg:row-span-2"
          >
            <img
              src="images/projects/foundation-4.jpg"
              alt="Construction site showcasing our expertise"
              className="aspect-[5/6] w-full object-cover brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary-100 to-primary-50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative p-6 bg-white rounded-lg shadow-sm ring-1 ring-primary-900/5 group-hover:shadow-md transition-all duration-300">
                  <div className="inline-flex p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-colors duration-300">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-7 text-primary-800 group-hover:text-primary-600 transition-colors duration-300">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-secondary-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Commitment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-2xl bg-primary-50 shadow-sm ring-1 ring-primary-900/5"
          >
            <h3 className="text-2xl font-bold tracking-tight text-primary-800 mb-4">
              Our Commitment
            </h3>
            <p className="text-lg leading-8 text-secondary-700">
              At AHA Construction, we're committed to delivering excellence in every project. Our focus on quality, innovation, and client satisfaction drives us to create buildings that not only meet but exceed expectations.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 