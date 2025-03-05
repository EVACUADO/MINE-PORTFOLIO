import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Clark Gil A. Evacuado
        </h1>
        <h2 className="text-2xl md:text-3xl mb-8">
          UI Designer & Developer
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          2nd Year College Student at Phinma St. Jude College Manila
          Passionate about creating beautiful and functional user interfaces.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cevacuado@gmail.com" // Direct Gmail link
            target="_blank" // Open in a new tab
            rel="noopener noreferrer" // Security for external links
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition"
          >
            Contact Me
          </a>
          <a 
            href="#projects"
            className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;