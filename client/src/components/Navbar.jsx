import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiSearch, FiMapPin, FiFileText, FiPhone, FiMail } from 'react-icons/fi';
import { GiChocolateBar, GiCandyCanes, GiJellyBeans, GiLollipop } from 'react-icons/gi';
import { FiMenu, FiX, FiChevronDown, FiSearch, FiArrowRight } from 'react-icons/fi';
import { GiChocolateBar, GiCandyCanes, GiJellyBeans, GiLollipop } from 'react-icons/gi';
// Updated data structure with icons for the mega menu

// --- Paste the `productCategories` array from Step 1 here ---

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <TopBar />
      <MainNavbar />
    </header>
  );
};
// A more detailed data structure for the product mega menu
const productCategories = [
  {
    category: "Candy Making Machine",
    icon: GiCandyCanes,
    categoryPath: "/products/candy",
    products: [
      { name: "100 KPH SS Candy Kettle", path: "/products/candy-kettle" },
      { name: "Jelly Candy Making Machine", path: "/products/jelly-candy" },
      { name: "Gummy Candy Making Machine", path: "/products/gummy-candy" },
    ],
  },
  {
    category: "Chocolate Moulding",
    icon: GiChocolateBar,
    categoryPath: "/products/chocolate",
    products: [
      { name: "50kg/hr Semi Automatic Machine", path: "/products/chocolate-semi-auto" },
      { name: "100kg/hr Fully Automatic Machine", path: "/products/chocolate-full-auto" },
      { name: "100kg/hr Semi Automatic Machine", path: "/products/chocolate-semi-auto-100" },
    ],
  },
  {
    category: "Gems Chocolate Machine",
    icon: GiJellyBeans,
    categoryPath: "/products/gems",
    products: [
      { name: "300 KPH Gems Chocolate Machine", path: "/products/gems-300" },
      { name: "100 KPH Gems Chocolate Machine", path: "/products/gems-100" },
    ],
  },
  {
    category: "Lollipop Stick Insert",
    icon: GiLollipop,
    categoryPath: "/products/lollipop",
    products: [
      { name: "100 CPM Flat Lollipop Machine", path: "/products/lollipop-flat" },
      { name: "200 CPM Flat Lollipop Machine", path: "/products/lollipop-flat-200" },
    ],
  },
];
const TopBar = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left Side: Logo and Info */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src="/logo.png" alt="RP Engineering Logo" className="h-12 w-auto" />
            </Link>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-gray-800">RP Engineering</h1>
              <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                <span className="flex items-center gap-1"><FiMapPin /> Indore, Madhya Pradesh</span>
                <span className="flex items-center gap-1"><FiFileText /> GST No: 23NSHPS8765J1ZP</span>
              </div>
            </div>
          </div>

          {/* Right Side: Contact and Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
             <div className="hidden sm:block">
                <img src="/trust-seal.png" alt="IndiaMART Trust Seal" className="h-10"/>
             </div>
             <div className="text-right">
                <a href="tel:08044565570" className="flex items-center justify-end gap-2 text-sm font-semibold text-gray-700 hover:text-primary">
                    <FiPhone/>
                    <span className="hidden sm:inline">Call 08044565570</span>
                </a>
                <p className="text-xs text-green-600">87% Response rate</p>
             </div>
             <a href="mailto:info@rpengineering.co.in" className="bg-[#004D40] text-white px-3 sm:px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-[#00382e] transition-colors flex items-center gap-2">
                <FiMail/>
                <span className="hidden sm:inline">Send Email</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `font-semibold text-base transition-colors duration-300 flex items-center gap-1 ${
      isActive ? 'text-accent' : 'text-white hover:text-accent'
    }`;

  return (
    <nav className="bg-dark-200 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <div
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <button className="flex items-center gap-2 font-semibold text-base text-white hover:text-accent transition-colors py-7">
                <FiMenu /> Our Products <FiChevronDown className={`transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isMegaMenuOpen && <MegaMenu />}
              </AnimatePresence>
            </div>
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact Us</NavLink>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center">
            <form className="relative">
              <input 
                type="text" 
                placeholder="Search Products..." 
                className="bg-dark-100 text-gray-200 placeholder-gray-400 rounded-full py-2 pl-4 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent">
                <FiSearch/>
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-2xl">
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-dark-200 border-t border-dark-100"
          >
            <div className="px-4 py-4 space-y-4">
              <NavLink to="/products" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Our Products</NavLink>
              <NavLink to="/about" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>About Us</NavLink>
              <NavLink to="/contact" className={navLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</NavLink>
              <form className="relative flex pt-2">
                <input type="text" placeholder="Search..." className="bg-dark-100 text-gray-200 placeholder-gray-400 rounded-full py-2 px-4 w-full focus:outline-none" />
                 <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><FiSearch/></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const MegaMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="absolute top-full -left-20 bg-white text-gray-800 shadow-2xl rounded-b-lg w-screen max-w-5xl"
    >
      <div className="grid grid-cols-12">
        {/* Left Promotional Column */}
        <div className="col-span-3 bg-light p-8 rounded-bl-lg">
            <h3 className="font-bold text-xl text-primary mb-2">Featured Machines</h3>
            <p className="text-sm text-gray-600 mb-4">Discover our top-of-the-line solutions for your production needs.</p>
            <img src="https://images.pexels.com/photos/4109944/pexels-photo-4109944.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Featured Machine" className="rounded-lg h-48 w-full object-cover mb-4"/>
            <Link to="/products">
                <button className="bg-primary text-white w-full px-4 py-2.5 rounded-md font-semibold hover:bg-dark-200 transition-colors flex items-center justify-center gap-2">
                    View All Categories <FiArrowRight/>
                </button>
            </Link>
        </div>

        {/* Right Product Columns */}
        <div className="col-span-9 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {productCategories.map((cat) => (
                <div key={cat.category}>
                <h3 className="font-bold text-base mb-4 flex items-center gap-2 text-dark-100">
                    <cat.icon className="text-accent text-2xl" />
                    {cat.category}
                </h3>
                <ul className="space-y-1">
                    {cat.products.map((prod) => (
                    <li key={prod.name}>
                        <Link to={prod.path} className="block text-sm text-gray-600 hover:text-primary hover:bg-gray-100 rounded p-2 transition-colors">{prod.name}</Link>
                    </li>
                    ))}
                </ul>
                <Link to={cat.categoryPath} className="text-sm font-semibold text-primary hover:underline mt-4 inline-block">View All</Link>
                </div>
            ))}
            </div>
        </div>
      </div>
    </motion.div>
  );
};


export default Navbar;