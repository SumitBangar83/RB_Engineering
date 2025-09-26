import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend, 
  FiClock,
  FiMessageCircle,
  FiCalendar,
  FiUser,
  FiBriefcase,
  FiFileText,
  FiArrowRight,
  FiCheckCircle,
  FiGlobe
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productInterest: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        productInterest: '',
        requirements: ''
      });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: "Our Location",
      details: ["Indore, Madhya Pradesh", "India - 452001"],
      description: "State-of-the-art manufacturing facility",
      color: "from-blue-500 to-blue-600",
      link: "#"
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: "Call Us",
      details: ["+91 88752 1931", "+91 98765 43210"],
      description: "24/7 technical support available",
      color: "from-green-500 to-green-600",
      link: "tel:+91887521931"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Us",
      details: ["info@rpengineering.com", "sales@rpengineering.com"],
      description: "Response within 2 hours",
      color: "from-purple-500 to-purple-600",
      link: "mailto:info@rpengineering.com"
    }
  ];

  const productInterests = [
    "Chocolate Making Machines",
    "Biscuit Making Machines",
    "Chapati Making Machines",
    "Packaging Machines",
    "Dough Kneading Machines",
    "Baking Ovens",
    "Custom Solution",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-6 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              Get In Touch
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to Start Your 
              <span className="text-yellow-300"> Project?</span>
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Contact our engineering experts for personalized machinery solutions. 
              Get a free consultation and detailed quotation within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 relative -mt-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <a href={item.link} className="block h-full">
                  <div className={`bg-gradient-to-r ${item.color} text-white rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 h-full transform hover:-translate-y-2`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <div className="space-y-2 mb-4">
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-lg opacity-90">{detail}</p>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm">{item.description}</p>
                    <div className="w-0 group-hover:w-full h-0.5 bg-white/30 mt-4 transition-all duration-300"></div>
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 text-white">
                  <div className="flex items-center mb-2">
                    <FiMessageCircle className="text-2xl mr-3" />
                    <h2 className="text-3xl font-bold">Get Your Custom Quote</h2>
                  </div>
                  <p className="opacity-90">We'll provide detailed proposal within 24 hours</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 text-center"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <FiCheckCircle className="text-green-600 text-4xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for contacting us. Our engineering team will review your requirements 
                      and get back to you with a detailed quotation within 24 hours.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsSubmitted(false)}
                        className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
                      >
                        Send Another Message
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-green-600 text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors"
                      >
                        Browse Products
                      </motion.button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-semibold">Full Name *</label>
                        <div className="relative">
                          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-semibold">Email Address *</label>
                        <div className="relative">
                          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-semibold">Phone Number *</label>
                        <div className="relative">
                          <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="+91 00000 00000"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-gray-700 font-semibold">Company Name</label>
                        <div className="relative">
                          <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="block text-gray-700 font-semibold mb-2">Product Interest *</label>
                      <div className="relative">
                        <FiFileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                        <select
                          name="productInterest"
                          value={formData.productInterest}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 appearance-none bg-white relative z-0"
                        >
                          <option value="">Select Product Category</option>
                          {productInterests.map((interest, index) => (
                            <option key={index} value={interest}>{interest}</option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                          ▼
                        </div>
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-gray-700 font-semibold mb-2">Project Requirements *</label>
                      <div className="relative">
                        <FiFileText className="absolute left-3 top-3 text-gray-400" />
                        <textarea
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all resize-none"
                          placeholder="Please describe your production needs, capacity requirements, timeline, and any specific features you're looking for..."
                        ></textarea>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Get Free Quote
                          <FiArrowRight className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <FiGlobe className="mr-3" />
                  Why Choose RP Engineering?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-blue-200 mt-1 flex-shrink-0" />
                    <span>25+ years of manufacturing experience</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-blue-200 mt-1 flex-shrink-0" />
                    <span>ISO 9001:2015 certified quality standards</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-blue-200 mt-1 flex-shrink-0" />
                    <span>Custom engineering solutions available</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FiCheckCircle className="text-blue-200 mt-1 flex-shrink-0" />
                    <span>Global after-sales support network</span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FiClock className="text-green-600 mr-3" />
                  Business Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Monday - Friday</span>
                    <span className="text-gray-900 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">Emergency Support Only</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm font-medium">
                    <span className="font-bold">24/7 Emergency Support:</span> Available for urgent technical issues
                  </p>
                </div>
              </div>

              {/* Quick Action Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 group-hover:text-green-700">Download Brochure</span>
                      <FiArrowRight className="text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 group-hover:text-green-700">Schedule Video Call</span>
                      <FiCalendar className="text-gray-400 group-hover:text-green-600" />
                    </div>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 group-hover:text-green-700">Visit Our Factory</span>
                      <FiMapPin className="text-gray-400 group-hover:text-green-600" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Need Immediate Assistance?</h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Our emergency support team is available 24/7 for urgent technical issues and immediate requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-green-600 rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold mb-2">+91 88752 1931</div>
                <div className="text-green-100">24/7 Emergency Support Line</div>
              </div>
              <div className="flex gap-4">
                <motion.a
                  href="tel:+91887521931"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center"
                >
                  <FiPhone className="mr-2" />
                  Call Now
                </motion.a>
                <motion.a
                  href="https://wa.me/91887521931"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;