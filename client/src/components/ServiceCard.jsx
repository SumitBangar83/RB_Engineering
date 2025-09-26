import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ machine }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200"
    >
      <div className="h-48 bg-gray-200 relative">
        <img 
          src={machine.image} 
          alt={machine.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-200 mb-3">{machine.name}</h3>
        <p className="text-dark-100 mb-4">{machine.description}</p>
        
        <div className="mb-4">
          {machine.features && machine.features.map((feature, index) => (
            <span 
              key={index}
              className="inline-block bg-light text-dark-100 text-sm px-3 py-1 rounded-full mr-2 mb-2"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-primary font-semibold hover:text-blue-900 transition-colors"
          >
            Get Quote <FiArrowRight className="ml-2" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;