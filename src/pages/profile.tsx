import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';

export default function ProfilePage() {
  return (
    <Layout>
      <div className="relative py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-primary-900/90"></div>
        </div>

        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl"
          >
            <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="relative aspect-[16/9] w-full">
                <img
                  src="/images/profile/eng_ahmed_husse.jpg"
                  alt="Engineer Ahmed Husse Ahmed"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="relative -mt-16 px-6 pb-8">
                <div className="flex items-end gap-4">
                  <div className="relative h-32 w-32 overflow-hidden rounded-xl border-4 border-primary-900">
                    <img
                      src="/images/profile/eng_ahmed_husse.jpg"
                      alt="Engineer Ahmed Husse Ahmed"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mb-2">
                    <h1 className="text-3xl font-bold text-white">Eng. Ahmed Husse Ahmed</h1>
                    <p className="text-lg text-primary-200">Founder & Chief Engineer</p>
                  </div>
                </div>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-primary-200">Education</h2>
                    <div className="mt-4 space-y-2">
                      <div>
                        <p className="text-lg text-white">BSc in Construction Technology Management</p>
                        <p className="text-primary-200">Addis Ababa University</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/5 p-6">
                    <h2 className="text-xl font-semibold text-primary-200">Experience</h2>
                    <p className="mt-4 text-gray-300">
                      Extensive experience in both road and building construction,
                      leading major projects across Ethiopia with a focus on
                      quality and innovation.
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="rounded-xl bg-white/5 p-6">
                      <h2 className="text-xl font-semibold text-primary-200">Expertise</h2>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-primary-800/50 px-4 py-2 text-white">Building Construction</span>
                        <span className="rounded-full bg-primary-800/50 px-4 py-2 text-white">Road Construction</span>
                        <span className="rounded-full bg-primary-800/50 px-4 py-2 text-white">Project Management</span>
                        <span className="rounded-full bg-primary-800/50 px-4 py-2 text-white">Structural Engineering</span>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="rounded-xl bg-white/5 p-6">
                      <h2 className="text-xl font-semibold text-primary-200">About</h2>
                      <p className="mt-4 text-gray-300">
                        As the Founder and Chief Engineer of AHA Construction, Engineer Ahmed Husse Ahmed
                        brings a wealth of experience and expertise to every project. His leadership has
                        been instrumental in establishing AHA Construction as a leading construction company
                        in the Wollo region, particularly in Dessie, Kombolcha, and Gerba.
                      </p>
                      <p className="mt-4 text-gray-300">
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
    </Layout>
  );
} 