import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ theme, toggleTheme }) {
  const [showAnimation, setShowAnimation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Produk', id: 'products' },
    { label: 'Tentang', id: 'about' },
    { label: 'Kontak', id: 'contact' },
  ];

  return (
    <motion.nav
      className={`bg-white dark:bg-gray-800 shadow-md fixed top-0 w-full z-10 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center relative">
            <motion.div
              onClick={() => {
                setShowAnimation(true);
                scrollToSection('home');
              }}
              className="flex items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src="/assets/images/logo.png"
                alt="Yumsert Logo"
                className="h-10 w-10 mr-2"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/40')}
              />
              <h1 className="text-2xl font-bold text-yumsert-blue dark:text-white">Yumsert</h1>
            </motion.div>
            <AnimatePresence>
              {showAnimation && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  exit={{ opacity: 0 }}
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
            </AnimatePresence>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-yumsert-blue dark:text-white hover:text-yumsert-orange px-3 py-2 rounded-md text-sm font-medium"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-600"
                whileHover={{ scale: 1.1 }}
              >
                {theme === 'light' ? <FaMoon className="text-yumsert-blue" /> : <FaSun className="text-yumsert-orange" />}
              </motion.button>
            </div>
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-yumsert-blue dark:text-white"
                whileHover={{ scale: 1.1 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-800 flex flex-col items-center space-y-2 py-2"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-yumsert-blue dark:text-white hover:text-yumsert-orange w-full text-center py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;