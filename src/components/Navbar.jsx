import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ theme, toggleTheme, activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Produk', href: '#products' },
    { name: 'Testimoni', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setIsOpen(false);
    setActiveSection(href.replace('#', ''));
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 bg-[var(--bg-color)] bg-opacity-80 backdrop-blur-md shadow-md z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#home')}
          >
            <motion.img
              src="/logo.png"
              alt="Yumsert Logo"
              className="h-10 w-auto"
              whileTap={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <motion.span
              className="text-xl font-bold text-[var(--yumsert-blue)]"
              whileTap={{ color: '#f97316' }}
              transition={{ duration: 0.3 }}
            >
              Yumsert
            </motion.span>
          </motion.div>
          <div className="hidden md:flex space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[var(--yumsert-orange)] text-white'
                    : 'text-[var(--text-color)] hover:bg-[var(--yumsert-blue)] hover:text-white'
                } transition-all duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-[var(--section-bg)] text-[var(--text-color)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
            </motion.button>
            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="p-2 rounded-full bg-[var(--section-bg)] text-[var(--text-color)]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaBars size={20} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[var(--bg-color)] bg-opacity-80 backdrop-blur-md shadow-md"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === link.href.replace('#', '')
                    ? 'bg-[var(--yumsert-orange)] text-white'
                    : 'text-[var(--text-color)] hover:bg-[var(--yumsert-blue)] hover:text-white'
                } transition-all duration-300`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;