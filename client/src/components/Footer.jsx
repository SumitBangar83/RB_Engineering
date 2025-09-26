import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RP Engineering</h3>
              <p className="text-gray-400">
                Leading manufacturer of food processing machinery with 25+ years of experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Chocolate Machines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Candy Machines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Roti Machines</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Jelly Machines</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Business Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>GST No: 23NSHPS8765J1ZP</p>
                <p>Trustseal Verified</p>
                <p>Since 1998</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RP Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;