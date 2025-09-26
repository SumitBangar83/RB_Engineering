import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiUsers, 
  FiAward, 
  FiClock, 
  FiGlobe, 
  FiStar,
  FiTarget,
  FiEye,
  FiShield,
  FiHeart,
  FiArrowRight
} from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: <FiClock size={32} />, number: "25+", text: "Years Experience", subtext: "Since 1998" },
    { icon: <FiUsers size={32} />, number: "500+", text: "Happy Clients", subtext: "Global Reach" },
    { icon: <FiAward size={32} />, number: "1000+", text: "Machines Delivered", subtext: "Worldwide" },
    { icon: <FiGlobe size={32} />, number: "45+", text: "Countries Served", subtext: "International" }
  ];

  const values = [
    {
      icon: <FiShield className="text-blue-500" />,
      title: "Quality First",
      description: "ISO 9001:2015 certified manufacturing with rigorous quality checks"
    },
    {
      icon: <FiTarget className="text-green-500" />,
      title: "Innovation Driven",
      description: "Continuous R&D to bring cutting-edge technology to our clients"
    },
    {
      icon: <FiHeart className="text-red-500" />,
      title: "Customer Centric",
      description: "Tailored solutions and comprehensive after-sales support"
    },
    {
      icon: <FiStar className="text-yellow-500" />,
      title: "Excellence",
      description: "Striving for perfection in every machine we deliver"
    }
  ];

  const milestones = [
    { year: "1998", event: "Company Founded", description: "Started as small workshop in Indore" },
    { year: "2005", event: "First Export", description: "Expanded to international markets" },
    { year: "2012", event: "ISO Certified", description: "Achieved quality management certification" },
    { year: "2020", event: "1000th Machine", description: "Delivered 1000th machine milestone" },
    { year: "2023", event: "New Facility", description: "Expanded manufacturing capacity" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-6">
              Since 1998
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Engineering 
              <span className="text-green-600"> Excellence</span> 
              in Food Processing
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              For over 25 years, RP Engineering Works has been at the forefront of manufacturing 
              high-quality food processing machinery, serving clients across 45+ countries with 
              innovative solutions and unwavering commitment to quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold mb-4 block">Our Journey</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Legacy Through 
                <span className="text-green-600"> Innovation</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Established in 1998, RP Engineering Works began as a small workshop with a big vision. 
                  Through decades of dedication, we've grown into a trusted global partner for food 
                  processing machinery.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our journey is marked by continuous innovation, quality craftsmanship, and an 
                  unwavering commitment to customer satisfaction. Every machine we build carries 
                  our legacy of excellence.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                {[
                  "ISO 9001:2015 Certified",
                  "Custom Engineering Solutions",
                  "Global After-Sales Support",
                  "R&D Driven Innovation"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-green-200 transition-colors">
                      <FiCheckCircle className="text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl p-1 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-8a0a83b6d8a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="RP Engineering Facility" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-sm font-semibold text-gray-700">Years Experience</div>
                </div>
              </motion.div>

              {/* Floating Quality Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-xl shadow-2xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <FiAward className="text-2xl" />
                  <div>
                    <div className="font-bold">ISO Certified</div>
                    <div className="text-sm opacity-90">Quality Assured</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Numbers That Speak</h2>
            <p className="text-gray-300 text-lg">Our journey in numbers</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  <div className="text-green-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold mb-1">{stat.text}</div>
                  <div className="text-gray-300 text-sm">{stat.subtext}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Values That Drive Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to these principles has been the foundation of our success and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-green-50 transition-all duration-300 border border-gray-100 hover:border-green-200 h-full">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey Timeline</h2>
            <p className="text-gray-600 text-lg">Milestones that shaped our growth</p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-green-200 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <div className="text-green-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust RP Engineering for their food processing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Get Free Consultation <FiArrowRight className="ml-2" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Our Products
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;