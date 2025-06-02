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
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      {/* Full-width background with blur effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `rgba(var(--bg-color-rgb), 0.1)`,
          backdropFilter: 'blur(12px) saturate(1.5)',
          WebkitBackdropFilter: 'blur(12px) saturate(1.5)', // For Safari compatibility
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Glossy highlight effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Constrained content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden relative z-10"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* Full-width background for mobile menu */}
          <div
            className="absolute inset-0"
            style={{
              background: `rgba(var(--bg-color-rgb), 0.1)`,
              backdropFilter: 'blur(12px) saturate(1.5)',
              WebkitBackdropFilter: 'blur(12px) saturate(1.5)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.2), transparent)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Constrained content for mobile menu */}
          <div className="max-w-7xl mx-auto px-2 pt-2 pb-3 space-y-1 sm:px-3 relative z-10">
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