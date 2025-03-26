import { motion } from 'framer-motion';
import { MapPinIcon, CalendarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'MYS Residential Mansion',
    description: 'Luxurious residential complex featuring modern amenities and elegant architectural design.',
    imageUrl: `${import.meta.env.BASE_URL}images/projects/mysresidence.JPG`,
    location: 'Gerba Suburban Area',
    date: 'Starting 2026',
    type: 'Residential',
    details: 'Modern residential development with premium finishes',
  },
  {
    title: 'SAA Residential Mansion',
    description: 'Custom-designed residential project combining comfort with contemporary architecture.',
    imageUrl: `${import.meta.env.BASE_URL}images/projects/seidresidence.JPG`,
    location: 'Gerba Suburban Area',
    date: 'Starting 2026',
    type: 'Residential',
    details: 'Bespoke residential construction with modern amenities',
  },
  {
    title: 'Main Commercial Complex',
    description: 'State-of-the-art commercial building showcasing innovative design and superior construction quality.',
    imageUrl: `${import.meta.env.BASE_URL}images/projects/main.jpg`,
    location: 'Dessie',
    date: 'Completed 2024',
    type: 'Commercial',
    details: 'Premium commercial space with modern infrastructure',
  },
  {
    title: 'Structural Framework Progress',
    description: 'Detailed view of our construction progress showing precise column placement and foundation work.',
    imageUrl: `${import.meta.env.BASE_URL}images/projects/foundation-4.jpg`,
    location: 'Dessie',
    date: 'In Progress 2024',
    type: 'Commercial',
    details: 'Extensive column framework installation',
  },
];

export default function Projects() {
  return (
    <div id="projects" className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Projects</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">
              Current Construction Projects
            </p>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Follow the progress of our ongoing construction projects in Dessie, Kombolcha, and Gerba. We pride ourselves on precision, 
              quality, and professional execution in every phase of construction.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-6 flex items-center gap-x-4 text-xs">
                  <div className="flex items-center gap-x-1 text-primary-600 font-medium">
                    <MapPinIcon className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-x-1 text-primary-600 font-medium">
                    <CalendarIcon className="h-4 w-4" />
                    {project.date}
                  </div>
                  <div className="flex items-center gap-x-1 text-primary-600 font-medium">
                    <BuildingOfficeIcon className="h-4 w-4" />
                    {project.type}
                  </div>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {project.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600">{project.description}</p>
                  <p className="mt-4 text-sm font-medium text-primary-600">{project.details}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a href="#contact" className="btn">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </div>
  );
} 