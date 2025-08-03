import React from 'react';
import { Helmet } from 'react-helmet';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Helmet>
          <title>Sarah Chen - Certified Soft Skills Trainer | SkillMaster</title>
          <meta name="description" content="Transform your professional skills with Sarah Chen, a certified soft skills trainer with 8+ years experience. Specializing in communication, leadership, and emotional intelligence training." />
          <meta name="keywords" content="soft skills trainer, leadership training, communication skills, emotional intelligence, professional development, corporate training" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        </Helmet>
        
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Gallery />
          <Contact />
        </main>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;