import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-blue-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/api/placeholder/1920/1080")',
          opacity: 0.2
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Precision Engineering
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Manufacturing high-quality food processing machinery since 1998. 
          Trusted by 500+ clients across India.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-dark-200 px-8 py-3 rounded-md font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center"
            >
              Get Free Quote <FiArrowRight className="ml-2" />
            </motion.button>
          </Link>
          
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-3 rounded-md font-bold text-lg hover:bg-white hover:text-primary transition-colors"
            >
              View Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;