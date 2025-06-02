import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ theme, toggleTheme, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Produk', id: 'products' },
    { label: 'Tentang', id: 'about' },
    { label: 'Testimoni', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Kontak', id: 'contact' },
  ];

  const scrollToSection = (sectionId) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(sectionId);
      }
      setIsOpen(false);
    }, 100);
  };

  return (
    <motion.nav
      className="bg-yumsert-blue text-white fixed w-full z-50 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            onClick={() => {
              setShowAnimation(true);
              scrollToSection('home');
            }}
            className="flex items-center cursor-pointer relative"
            whileHover={{ scale: 1.1 }}
          >
            <motion.img
              src="/assets/images/logo.png"
              alt="Yumsert Logo"
              className="h-10 w-10 mr-2"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
              animate={{ rotate: showAnimation ? 360 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
            <h1 className="text-2xl font-bold">Yumsert</h1>
            {showAnimation && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                onAnimationComplete={() => setShowAnimation(false)}
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yumsert-orange to-yumsert-blue" />
                <motion.div
                  className="absolute w-12 h-12 border-4 border-yumsert-blue rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            )}
          </motion.div>
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id ? 'text-yumsert-orange' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              <motion.button
                onClick={toggleTheme}
                className={`p-3 rounded-full transition-colors duration-300 ${
                  theme === 'light' ? 'bg-gray-200' : 'bg-gray-600'
                } border-2 border-yumsert-blue hover:bg-yumsert-orange hover:text-white`}
                whileHover={{ scale: 1.1 }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
              </motion.button>
              <motion.button
                onClick={() => setIsOpen((prev) => !prev)}
                onTouchStart={() => setIsOpen((prev) => !prev)}
                onMouseDown={() => setIsOpen((prev) => !prev)}
                className="md:hidden p-2 transition-colors duration-300 hover:bg-yumsert-orange hover:text-white"
                whileHover={{ scale: 1.1 }}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-yumsert-blue flex flex-col items-center space-y-2 py-2 z-40">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`text-white w-full text-center py-2 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-yumsert-orange' : 'text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ scale: 1.1 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;