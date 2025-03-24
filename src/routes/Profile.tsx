import { motion } from 'framer-motion';

export default function Profile() {
  return (
    <div className="relative min-h-screen bg-white py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="overflow-hidden rounded-2xl bg-gray-50 shadow-xl">
            <div className="relative aspect-[16/9] w-full">
              <img
                src={`${import.meta.env.BASE_URL}images/eng_ahmed_husse.jpg`}
                alt="Engineer Ahmed Husse Ahmed"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            <div className="relative -mt-16 px-6 pb-8">
              <div className="flex items-start gap-6">
                <div className="relative h-32 w-32 overflow-hidden rounded-xl border-4 border-[#0095FF] shadow-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}images/eng_ahmed_husse.jpg`}
                    alt="Engineer Ahmed Husse Ahmed"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-20">
                  <h1 className="text-4xl font-bold text-gray-900">Eng. Ahmed Husse Ahmed</h1>
                  <p className="mt-2 text-xl text-[#0095FF] font-medium">Founder & Chief Engineer</p>
                </div>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-md">
                  <h2 className="text-xl font-semibold text-[#0095FF]">Education</h2>
                  <div className="mt-4 space-y-2">
                    <div>
                      <p className="text-lg text-gray-900">BSc in Construction Technology Management</p>
                      <p className="text-[#0095FF]">Addis Ababa University</p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-md">
                  <h2 className="text-xl font-semibold text-[#0095FF]">Experience</h2>
                  <p className="mt-4 text-gray-600">
                    Extensive experience in both road and building construction, 
                    leading major projects across Ethiopia with a focus on 
                    quality and innovation.
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <div className="rounded-xl bg-white p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-[#0095FF]">Expertise</h2>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-full bg-[#0095FF] px-4 py-2 text-white">Building Construction</span>
                      <span className="rounded-full bg-[#0095FF] px-4 py-2 text-white">Road Construction</span>
                      <span className="rounded-full bg-[#0095FF] px-4 py-2 text-white">Project Management</span>
                      <span className="rounded-full bg-[#0095FF] px-4 py-2 text-white">Structural Engineering</span>
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="rounded-xl bg-white p-6 shadow-md">
                    <h2 className="text-xl font-semibold text-[#0095FF]">About</h2>
                    <p className="mt-4 text-gray-600">
                      As the Founder and Chief Engineer of AHA Construction, Engineer Ahmed Husse Ahmed 
                      brings a wealth of experience and expertise to every project. His leadership has 
                      been instrumental in establishing AHA Construction as a leading construction company 
                      in the Wollo region, particularly in Dessie, Kombolcha, and Gerba.
                    </p>
                    <p className="mt-4 text-gray-600">
                      Under his guidance, the company has successfully completed numerous significant 
                      projects, maintaining the highest standards of quality and innovation in both 
                      building and road construction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 