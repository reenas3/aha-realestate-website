import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import Profile from './routes/Profile'
import './index.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="relative min-h-screen bg-white">
            <main className="relative">
              <Hero />
              <div className="relative">
                <div className="container">
                  <div className="space-y-48 py-32">
                    <About />
                    <Services />
                    <Projects />
                    <Contact />
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        } />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  )
}
