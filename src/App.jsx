import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Project2 from './components/Project2';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Project2 /> 
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;