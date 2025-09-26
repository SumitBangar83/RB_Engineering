import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiArrowRight, FiCheck, FiStar, FiShoppingCart, FiPhone, FiMail, FiMapPin, FiChevronRight, FiPlay, FiMessageSquare, FiUser, FiBriefcase, FiPackage, FiChevronDown, FiFileText, FiSend, FiDollarSign, FiClock, FiSettings, FiPlayCircle, FiVideo, FiMessageCircle, FiCalendar } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ProductCategories from './Home/ProductCategories';
import About from './Home/About';
const Home = () => {
  // Hero Banner Slider Data
  const heroSlides = [
    {
      id: 1,
      title: "Premium Food Processing Machinery",
      subtitle: "Manufacturers of Chocolate, Candy & Roti Making Machines",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&w=1200",
      buttonText: "Get Quote Now"
    },
    {
      id: 2,
      title: "Industrial Grade Machinery",
      subtitle: "25+ Years of Manufacturing Excellence",
      image: "https://images.unsplash.com/photo-1587334986753-b3120c9c7d51?ixlib=rb-4.0.3&w=1200",
      buttonText: "View Products"
    },
    {
      id: 3,
      title: "Customized Solutions",
      subtitle: "Tailored Machinery for Your Business Needs",
      image: "https://images.unsplash.com/photo-1570913149827-2d5d6d21f60d?ixlib=rb-4.0.3&w=1200",
      buttonText: "Contact Us"
    }
  ];

  // Product Categories with their products
  
 
  // All categories for quick navigation
const allCategories = [
  { 
    name: "Candy Making Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2023/07/20/12/28/lolly-8139316_640.jpg" 
  },
  { 
    name: "Chocolate Moulding Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2020/12/10/16/09/chocolate-5820422_640.jpg" 
  },
  { 
    name: "Gems Chocolate Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2017/02/16/19/33/sweets-2072445_640.jpg" 
  },
  { 
    name: "Lollipop Stick Insert Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2016/10/26/22/27/lollipops-1773240_640.jpg" 
  },
  { 
    name: "Chocolate Cooling Tunnel", 
    imageUrl: "https://images.pexels.com/photos/4110006/pexels-photo-4110006.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    name: "Liquid Mixing Tanks", 
    imageUrl: "https://images.pexels.com/photos/8472935/pexels-photo-8472935.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    name: "Fruit Jelly Making Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2017/02/12/14/01/gummy-bears-2060100_640.jpg" 
  },
  { 
    name: "Chocolate Enrobing Machine", 
    imageUrl: "https://images.pexels.com/photos/4109944/pexels-photo-4109944.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    name: "Chocolate Grinding Machine", 
    imageUrl: "https://images.pexels.com/photos/5849392/pexels-photo-5849392.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  { 
    name: "Roti Making Machine", 
    imageUrl: "https://images.pexels.com/photos/8891963/pexels-photo-8891963.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    name: "Biscuit Making Machine", 
    imageUrl: "https://images.pexels.com/photos/4110003/pexels-photo-4110003.jpeg?auto=compress&cs=tinysrgb&w=600" 
  },
  { 
    name: "Food Packaging Machine", 
    imageUrl: "https://cdn.pixabay.com/photo/2018/01/23/04/18/conveyor-belt-3100212_640.jpg" 
  }
];
  // Testimonials
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Sweet Delights Pvt. Ltd.",
      rating: 5,
      comment: "Excellent machinery quality and after-sales service. The chocolate making machine has increased our production by 40%.",
      product: "Chocolate Moulding Machine"
    },
    {
      name: "Priya Sharma",
      company: "Candy World Industries",
      rating: 5,
      comment: "RP Engineering provided us with a complete candy production line. The machines are robust and efficient.",
      product: "Candy Making Machine"
    },
    {
      name: "Amit Patel",
      company: "Daily Foods Corporation",
      rating: 4,
      comment: "Good quality roti making machines. Timely delivery and good technical support.",
      product: "Roti Making Machine"
    }
  ];

  // Product Videos
  const productVideos = [
    {
      id: 1,
      title: "Chocolate Making Machine Demo",
      thumbnail: "https://images.unsplash.com/photo-1570913149827-2d5d6d21f60d?ixlib=rb-4.0.3&w=400",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Candy Production Line",
      thumbnail: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixlib=rb-4.0.3&w=400",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Automatic Roti Maker",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&w=400",
      videoUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Swiper Slider */}
      <section className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div 
                className="h-full w-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative h-full flex items-center justify-center text-center text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl px-4"
                  >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                      {slide.subtitle}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
                    >
                      {slide.buttonText}
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Quick Categories Navigation */}
      <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Product Categories</h2>
          <p className="text-gray-600">A comprehensive range of food processing machinery</p>
        </motion.div>

        {/* 3. Replace the flex container with the Swiper component */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Default slides for mobile
          breakpoints={{
            // For screens 640px and larger
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            // For screens 768px and larger
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            // For screens 1024px and larger
            1024: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
          autoplay={{delay: 2000}}
          className="py-4" // Add padding for arrows
        >
          {allCategories.map((category, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 shadow-md group-hover:shadow-xl transition-all duration-300"
                />
                <h3 className="font-semibold text-gray-700 mt-4 text-sm">{category.name}</h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
      {/* Featured Product Categories */}
      
        <div className="product-categories-container">
          
      {<ProductCategories/>}
    </div>
  

      {/* About Company Section */}
     {<About/>}

      {/* Enquiry Form Section */}
     {/* Enhanced Enquiry Form Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12"
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
        Get Custom Quote
      </span>
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Ready to Transform Your 
        <span className="text-green-600"> Production Line?</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Get a personalized quote for your specific needs. Our experts will contact you within 24 hours.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Form Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <FiMessageSquare className="text-green-600 text-lg" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Quick Enquiry Form</h3>
              <p className="text-green-600 text-sm">We respond within 2 hours</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Full Name *</label>
                <div className="relative">
                  <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Email Address *</label>
                <div className="relative">
                  <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="email" 
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Phone Number *</label>
                <div className="relative">
                  <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="tel" 
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Company Name</label>
                <div className="relative">
                  <FiBriefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input 
                    type="text" 
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Product Interest *</label>
              <div className="relative">
                <FiPackage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 appearance-none bg-white">
                  <option>Select Product Category</option>
                  <option>Chocolate Making Machinery</option>
                  <option>Candy Production Equipment</option>
                  <option>Roti Making Machines</option>
                  <option>Fruit Jelly Manufacturing</option>
                  <option>Complete Production Lines</option>
                  <option>Custom Solution</option>
                </select>
                <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">Project Requirements *</label>
              <div className="relative">
                <FiFileText className="absolute left-3 top-3 text-gray-400" />
                <textarea 
                  rows="4"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-all"
                  placeholder="Tell us about your production needs, capacity requirements, and any specific features you're looking for..."
                ></textarea>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <FiSend className="text-lg" />
              <span>Get Instant Quote</span>
            </motion.button>

            <p className="text-center text-gray-500 text-sm">
              By submitting, you agree to our privacy policy. We'll never share your information.
            </p>
          </form>
        </div>
      </motion.div>

      {/* Benefits Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Why Get a Quote?</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiDollarSign className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Competitive Pricing</h4>
                <p className="text-gray-600 text-sm">Best market rates with volume discounts</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiClock className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Fast Response</h4>
                <p className="text-gray-600 text-sm">Get detailed quote within 2 business hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FiSettings className="text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Custom Solutions</h4>
                <p className="text-gray-600 text-sm">Tailored to your specific requirements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-4">Prefer Direct Contact?</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <FiPhone className="text-green-200" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiMail className="text-green-200" />
              <span>sales@rpengineering.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FiClock className="text-green-200" />
              <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
          <button className="w-full mt-4 bg-white text-green-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Call
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Trusted By Industry Leaders</h4>
          <div className="flex items-center justify-between opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">5000+</div>
              <div className="text-xs text-gray-600">Machines Sold</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">45+</div>
              <div className="text-xs text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">98%</div>
              <div className="text-xs text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

     {/* Enhanced Testimonials Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
  {/* Background Decorations */}
  <div className="absolute top-10 left-10 w-32 h-32 bg-green-100 rounded-full opacity-20 blur-xl"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-200 rounded-full opacity-30 blur-xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
        Client Success Stories
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Trusted by 
        <span className="text-green-600"> Industry Leaders</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover why businesses worldwide choose RP Engineering for their food processing machinery needs.
      </p>
    </motion.div>

    {/* Testimonials Grid */}
    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group"
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8 h-full flex flex-col relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-green-100 text-6xl opacity-50">
              <FiMessageSquare />
            </div>
            
            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex text-amber-400 mr-3">
                {[...Array(5)].map((_, i) => (
                  <FiStar 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">{testimonial.rating}.0/5.0</span>
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-gray-700 mb-8 leading-relaxed flex-grow relative z-10">
              "{testimonial.comment}"
            </blockquote>
            
            {/* Client Info */}
            <div className="border-t pt-6 mt-auto">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-green-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
              
              {/* Product Tag */}
              <div className="mt-3">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                  {testimonial.product}
                </span>
              </div>
            </div>
            
            {/* Hover Effect Border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Stats Bar */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
          <div className="text-sm text-gray-600 font-medium">Machines Installed</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">45+</div>
          <div className="text-sm text-gray-600 font-medium">Countries Served</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
          <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
          <div className="text-sm text-gray-600 font-medium">Support Available</div>
        </div>
      </div>
    </motion.div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
        <p className="text-green-100 mb-6 max-w-2xl mx-auto">
          Get started with RP Engineering and experience the difference in quality and service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-green-600 transition-colors"
          >
            View Case Studies
          </motion.button>
        </div>
      </div>
    </motion.div>
  </div>
</section>

    {/* Enhanced Product Videos Section */}
<section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/20 relative overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-10 blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full opacity-10 blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
        See Our Machines in Action
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        Experience 
        <span className="text-green-600"> Precision Engineering</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Watch our high-performance machinery transform raw materials into premium food products with unmatched efficiency.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-3 gap-8 mb-12">
      {productVideos.map((video, index) => (
        <motion.div
          key={video.id}
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group"
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden h-full flex flex-col">
            {/* Video Thumbnail */}
            <div className="relative overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-green-600 rounded-full p-5 shadow-2xl cursor-pointer transform group-hover:scale-110 transition-transform duration-300"
                >
                  <FiPlay className="text-white text-2xl ml-1" />
                </motion.div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-medium">
                {video.duration}
              </div>
            </div>

            {/* Video Content */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="flex-grow">
                <h3 className="font-bold text-gray-900 text-lg mb-3 leading-tight group-hover:text-green-700 transition-colors">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {video.description}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-600 rounded-full text-xs font-medium">
                  <FiPlayCircle className="mr-1" /> {video.views} views
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-600 font-semibold flex items-center hover:text-green-700 transition-colors group/btn"
                >
                  Watch Demo
                  <FiArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* CTA Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Demonstration?</h3>
        <p className="text-gray-600 mb-6">
          Schedule a live video call with our engineers to see specific machines tailored to your production needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            <FiVideo className="mr-2" /> Schedule Live Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Download Brochure
          </motion.button>
        </div>
      </div>
    </motion.div>
  </div>
</section>
     {/* Enhanced Contact/Location Section */}
<section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.03]">
    <div className="absolute top-20 left-20 w-64 h-64 bg-green-500 rounded-full"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500 rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-8"
      >
        <div className="space-y-4">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
            Global Headquarters
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Let's Start Your 
            <span className="text-green-600"> Project</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get in touch with our engineering team to discuss your specific requirements and discover tailored solutions.
          </p>
        </div>

        {/* Contact Details */}
        <div className="space-y-6">
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
              <FiMapPin className="text-green-600 text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Our Location</h4>
              <p className="text-gray-600">Indore, Madhya Pradesh, India</p>
              <p className="text-sm text-gray-500 mt-1">World-class manufacturing facility</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
              <FiPhone className="text-green-600 text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Phone & WhatsApp</h4>
              <p className="text-gray-600">+91 88752 1931</p>
              <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent inquiries</p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-start p-4 rounded-xl hover:bg-green-50 transition-colors group"
          >
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
              <FiMail className="text-green-600 text-xl" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg mb-1">Email Us</h4>
              <p className="text-gray-600">info@rpengineering.com</p>
              <p className="text-sm text-gray-500 mt-1">Typically respond within 2 hours</p>
            </div>
          </motion.div>
        </div>

        {/* Business Hours */}
        <div className="bg-green-50 rounded-xl p-6">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center">
            <FiClock className="text-green-600 mr-2" /> Business Hours
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Monday - Friday</span>
              <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Saturday</span>
              <span className="font-semibold text-gray-900">9:00 AM - 2:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sunday</span>
              <span className="font-semibold text-gray-900">Emergency Support Only</span>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <FiMessageCircle className="mr-2" /> Send Message
            </motion.button>
          </Link>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 border-2 border-green-600 text-green-600 py-4 rounded-xl font-semibold hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
          >
            <FiCalendar className="mr-2" /> Schedule Call
          </motion.button>
        </div>
      </motion.div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-6"
      >
        {/* Map Container */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="h-96 relative">
            {/* Google Maps Integration */}
            <div className="w-full h-full bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiMapPin className="text-green-600 text-2xl" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">RP Engineering</h4>
                <p className="text-gray-600 mb-4">Indore, Madhya Pradesh, India</p>
                <button className="text-green-600 font-semibold hover:text-green-700 transition-colors">
                  View on Google Maps
                </button>
              </div>
            </div>
            
            {/* Map Overlay Info */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
              <h5 className="font-bold text-gray-900 mb-1">Manufacturing Facility</h5>
              <p className="text-sm text-gray-600">State-of-the-art production unit with R&D center</p>
            </div>
          </div>
        </div>

        {/* Quick Contact Card */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
          <h4 className="font-bold text-lg mb-3">Need Immediate Assistance?</h4>
          <p className="text-green-100 mb-4 text-sm">Our technical support team is available 24/7 for urgent inquiries.</p>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Emergency Line: +91 98765 43210</span>
            <FiPhone className="text-green-200" />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

     
    </div>
  );
};

export default Home;