import { motion } from 'framer-motion';
import { FiCheck, FiAward, FiGlobe, FiUsers, FiArrowRight } from 'react-icons/fi';
import {FaBuilding} from 'react-icons/fa'
import { Link } from 'react-router-dom'; // Assuming react-router-dom for Link

const About = () => {
  return (
 
<section className="py-20 bg-gradient-to-br from-white to-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8"
      >
        {/* Section Header */}
        <div className="space-y-4">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
            Since 1998
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Leading Innovation in 
            <span className="text-green-600"> Food Processing</span>
          </h2>
        </div>

        {/* Main Description */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            For over a quarter-century, RP Engineering has been at the forefront of 
            manufacturing excellence in food processing machinery. Our commitment to 
            quality and innovation has made us a trusted partner for businesses worldwide.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            We specialize in state-of-the-art machinery for chocolate, candy, roti, 
            and fruit jelly production, helping our clients increase efficiency and 
            maintain the highest quality standards in their operations.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 py-4">
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-1">25+</div>
            <div className="text-sm text-gray-600 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-1">5000+</div>
            <div className="text-sm text-gray-600 font-medium">Machines Sold</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-1">45+</div>
            <div className="text-sm text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
            <div className="text-sm text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheck className="text-green-600" />
            </div>
            <span className="text-gray-700 font-medium">Customized solutions for every client</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheck className="text-green-600" />
            </div>
            <span className="text-gray-700 font-medium">ISO 9001 certified manufacturing</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheck className="text-green-600" />
            </div>
            <span className="text-gray-700 font-medium">Global after-sales support network</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/about">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Discover Our Story</span>
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        className="relative"
      >
        {/* Main Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="RP Engineering Factory" 
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Floating Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-100"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-1">25+</div>
            <div className="text-sm font-semibold text-gray-700">Years of Excellence</div>
            <div className="w-12 h-1 bg-green-400 mx-auto mt-2 rounded-full"></div>
          </div>
        </motion.div>

        {/* Secondary Floating Element */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute -top-6 -right-6 bg-green-600 text-white p-4 rounded-xl shadow-2xl"
        >
          <div className="flex items-center space-x-3">
            <div className="bg-green-500 p-2 rounded-lg">
              <FiAward className="text-xl" />
            </div>
            <div>
              <div className="font-bold">Industry Leader</div>
              <div className="text-sm opacity-90">Since 1998</div>
            </div>
          </div>
        </motion.div>

        {/* Background Decorative Elements */}
        <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
        <div className="absolute -z-10 bottom-10 -left-10 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default About