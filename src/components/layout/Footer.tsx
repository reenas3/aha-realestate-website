import { motion } from 'framer-motion';
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
  HomeIcon,
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

const navigation = {
  main: [
    { name: 'Home', href: '#', icon: HomeIcon },
    { name: 'About', href: '#about', icon: BuildingOffice2Icon },
    { name: 'Services', href: '#services', icon: WrenchScrewdriverIcon },
    { name: 'Projects', href: '#projects', icon: ChartBarIcon },
    { name: 'Contact', href: '#contact', icon: EnvelopeIcon },
  ],
  contact: [
    {
      name: 'Email',
      href: 'mailto:aminuibnuahmed@gmail.com',
      icon: EnvelopeIcon,
      text: 'aminuibnuahmed@gmail.com',
    },
    {
      name: 'Phone',
      href: 'tel:+251911531437',
      icon: PhoneIcon,
      text: '+251 911 531 437',
    },
    {
      name: 'Location',
      href: '#contact',
      icon: MapPinIcon,
      text: 'Gerba, Ethiopia',
    },
    {
      name: 'Hours',
      href: '#contact',
      icon: ClockIcon,
      text: 'Mon - Fri: 8:00 AM - 6:00 PM',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-lg font-semibold text-white">AHA Construction</h3>
            <p className="mt-2 text-sm leading-6 text-gray-300">
              Building excellence in Dessie, Kombolcha, and Gerba since 2010. Quality construction services for residential and commercial projects.
            </p>
            <div className="flex space-x-5">
              {navigation.contact.slice(0, 2).map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Links</h3>
                <ul role="list" className="mt-6 space-y-2">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <a 
                        href={item.href} 
                        className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        <item.icon className="mr-2 h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-0"
              >
                <h3 className="text-sm font-semibold leading-6 text-white">Our Services</h3>
                <ul role="list" className="mt-6 space-y-2">
                  <li>
                    <a href="#services" className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                      <HomeIcon className="mr-2 h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                      Residential Construction
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                      <BuildingOffice2Icon className="mr-2 h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                      Commercial Building
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                      <WrenchScrewdriverIcon className="mr-2 h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                      Renovation & Repairs
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="group flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                      <ChartBarIcon className="mr-2 h-3.5 w-3.5 text-gray-400 group-hover:text-white transition-colors" />
                      Project Management
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
              <ul role="list" className="mt-6 space-y-2">
                {navigation.contact.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <item.icon className="h-3.5 w-3.5 text-gray-400" />
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} AHA Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 