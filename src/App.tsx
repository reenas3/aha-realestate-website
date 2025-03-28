import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Profile from './routes/Profile'
import ComingSoon from './routes/ComingSoon'
import TestimonialsSection from './components/sections/Testimonials'
import News from './components/sections/News'
import AdminNews from './routes/AdminNews'
import './index.css'

export default function App() {
  return (
    <Router basename="/aha-realestate-website">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen bg-white">
            <main className="relative">
              <Hero />
              <div className="relative">
                <div className="container">
                  <div className="space-y-24 py-24">
                    <About />
                    <Services />
                    <Projects />
                    <News />
                    <TestimonialsSection />
                    <Contact />
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/admin/news" element={<AdminNews />} />
      </Routes>
    </Router>
  )
}
