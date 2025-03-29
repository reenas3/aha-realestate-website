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
import './index.css'

export default function App() {
  return (
    <Router basename="/aha-realestate-website">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <main id="home">
              <Hero />
              <Services />
              <Projects />
              <News />
              <TestimonialsSection />
              <Contact />
            </main>
            <Footer />
          </>
        } />
        <Route path="/profile" element={<Profile />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  )
}
