import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiSettings, 
  FiUsers, 
  FiGlobe, 
  FiAward,
  FiArrowRight,
  FiPlay,
  FiClock,
  FiStar
} from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 'chocolate',
      name: "Chocolate Making Machines",
      description: "Complete chocolate production lines including tempering, molding, and enrobing machines for premium quality chocolate products",
      image: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Tempering Machines", "Molding Lines", "Enrobing Systems", "Cooling Tunnels"],
      capacity: "100-5000 kg/hr",
      applications: ["Bars", "Truffles", "Coated Nuts", "Chocolate Chips"]
    },
    {
      id: 'biscuit',
      name: "Biscuit Making Machines",
      description: "Fully automated biscuit production lines for various types including cream biscuits, crackers, cookies, and specialty biscuits",
      image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Dough Mixers", "Forming Machines", "Baking Ovens", "Cooling Conveyors"],
      capacity: "500-10000 pieces/hr",
      applications: ["Cream Biscuits", "Crackers", "Cookies", "Specialty Biscuits"]
    },
    {
      id: 'chapati',
      name: "Chapati Making Machines",
      description: "Fully automatic chapati and roti making machines designed for restaurants, caterers, and food industries with high efficiency",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Automatic Dough Feed", "Precision Rolling", "Gas/Electric Heating", "High Capacity"],
      capacity: "200-2000 chapatis/hr",
      applications: ["Restaurants", "Catering", "Food Chains", "Institutions"]
    },
    {
      id: 'packaging',
      name: "Packaging Machines",
      description: "Advanced automated packaging solutions for food products with various packaging materials and sealing options",
      image: "https://images.unsplash.com/photo-1589923188653-66d1cd42d91c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Automatic Weighing", "Vacuum Packaging", "Labeling Systems", "Sealing Machines"],
      capacity: "Customizable",
      applications: ["Retail Packaging", "Bulk Packaging", "Vacuum Sealing", "Labeling"]
    },
    {
      id: 'dough',
      name: "Dough Kneading Machines",
      description: "Industrial-grade dough mixers and kneaders for bakeries, pizzerias, and large-scale food processing units",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Various Capacities", "Stainless Steel", "Programmable Controls", "Hygienic Design"],
      capacity: "10-500 kg/batch",
      applications: ["Bakeries", "Pizzerias", "Food Processing", "Catering"]
    },
    {
      id: 'ovens',
      name: "Baking Ovens",
      description: "High-performance industrial baking ovens with precise temperature control for consistent, perfect results every time",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Conveyor Ovens", "Rotary Ovens", "Electric/Gas Options", "Energy Efficient"],
      capacity: "Customizable",
      applications: ["Baking", "Roasting", "Drying", "Heating"]
    }
  ];

  const capabilities = [
    {
      icon: <FiSettings className="text-3xl" />,
      title: "Custom Engineering",
      description: "Tailored solutions designed specifically for your production needs"
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: "Expert Consultation",
      description: "25+ years of technical expertise guiding your equipment selection"
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: "Global Support",
      description: "Comprehensive after-sales service across 45+ countries"
    },
    {
      icon: <FiAward className="text-3xl" />,
      title: "Quality Assurance",
      description: "ISO 9001:2015 certified manufacturing with rigorous testing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Premium Food Processing Solutions
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Machinery 
              <span className="text-yellow-300"> Solutions</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of high-performance food processing machinery, 
              engineered for efficiency, reliability, and exceptional results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-600 font-semibold mb-4 block">Our Product Range</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Specialized Machinery 
              <span className="text-green-600"> Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From individual machines to complete production lines, we deliver solutions that 
              enhance productivity and ensure consistent quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Hot
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span>Capacity</span>
                        <span className="font-semibold text-green-600">{service.capacity}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors group/btn"
                      >
                        Explore Details
                        <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                      <button className="text-gray-400 hover:text-green-600 transition-colors">
                        <FiPlay />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 font-semibold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl font-bold mb-4">Our Core Capabilities</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Beyond machinery, we provide comprehensive solutions that drive your business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-gray-800 rounded-2xl p-8 hover:bg-green-600 transition-all duration-300 border border-gray-700 hover:border-green-500 h-full">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white group-hover:scale-110 transition-transform">
                    <div className="text-white group-hover:text-green-600">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-gray-300 group-hover:text-white/90 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="text-green-600 font-semibold mb-4 block">Tailored Solutions</span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Custom Engineering 
                <span className="text-green-600"> Services</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We understand that every production facility has unique requirements. Our engineering 
                team specializes in designing and manufacturing custom machinery solutions that 
                perfectly match your specific needs and production goals.
              </p>

              <div className="space-y-6">
                {[
                  "Custom machine design and fabrication",
                  "Production line optimization and integration",
                  "Capacity enhancement solutions",
                  "Retrofitting and technology upgrades",
                  "Technical consultation and process optimization",
                  "Training and operational support"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center group cursor-pointer"
                  >
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                      <FiCheckCircle className="text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <FiSettings className="mr-2" /> Request Custom Quote
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors"
                >
                  Download Brochure
                </motion.button>
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
                  src="https://images.unsplash.com/photo-1581093458791-8a0a83b6d8a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Custom Engineering" 
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              
              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border border-gray-100"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">500+</div>
                  <div className="text-sm font-semibold text-gray-700">Custom Projects</div>
                  <div className="w-12 h-1 bg-green-400 mx-auto mt-2 rounded-full"></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 bg-green-600 text-white rounded-2xl shadow-2xl p-4"
              >
                <div className="flex items-center space-x-3">
                  <FiStar className="text-xl" />
                  <div>
                    <div className="font-bold">25+ Years</div>
                    <div className="text-sm opacity-90">Expertise</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Production?</h2>
            <p className="text-green-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and find the perfect machinery solution for your business.
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
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;