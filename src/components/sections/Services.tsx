import { motion } from 'framer-motion';
import {
  HomeIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    name: 'Residential Construction',
    description: 'Custom homes, apartments, and residential complexes built to your specifications with quality materials and expert craftsmanship.',
    icon: HomeIcon,
  },
  {
    name: 'Commercial Building',
    description: 'Office buildings, retail spaces, and industrial facilities designed for functionality and long-term value.',
    icon: BuildingOfficeIcon,
  },
  {
    name: 'Renovation & Repairs',
    description: 'Comprehensive renovation services and maintenance for both residential and commercial properties.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Project Management',
    description: 'Professional project management and supervision to ensure timely completion and quality standards.',
    icon: ClipboardDocumentCheckIcon,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-gray-50 py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Construction Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From residential homes to commercial buildings, we provide end-to-end construction services 
              tailored to meet your specific needs and exceed your expectations.
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <p className="mt-6">
                    <a href="#contact" className="text-sm font-semibold leading-6 text-primary-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a href="#contact" className="btn">
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </div>
  );
} 