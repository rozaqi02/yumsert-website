import { useState } from 'react';
import { motion } from 'framer-motion';

function ProductCard({ name, image, category, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-auto object-cover"
          style={{ aspectRatio: '4/3', borderRadius: '10px' }}
          onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300')}
        />
        <div
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-white font-semibold text-xs flex items-center space-x-1 ${
            category === 'Self Reward' ? 'bg-gradient-to-r from-[var(--yumsert-blue)] to-[var(--yumsert-orange)]' : 'bg-gradient-to-r from-[var(--yumsert-orange)] to-[var(--yumsert-blue)]'
          }`}
        >
          <span>{category}</span>
          <span>{category === 'Self Reward' ? '✨' : '💖'}</span>
        </div>
      </div>
      <div className="p-4 bg-[var(--section-bg)]">
        <h3 className="text-lg font-semibold text-[var(--text-color)]">{name}</h3>
        <motion.button
          onClick={() => setIsOpen(true)}
          className="mt-2 text-[var(--yumsert-orange)] font-semibold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Lihat Deskripsi
        </motion.button>
      </div>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border-2 border-[var(--yumsert-blue)] relative overflow-hidden"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--yumsert-blue)] to-[var(--yumsert-orange)]" />
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover rounded-lg mb-4"
              style={{ aspectRatio: '4/3' }}
            />
            <h3 className="text-xl font-bold text-[var(--yumsert-blue)]">{name} 🌟</h3>
            <p className="text-[var(--text-color)] mt-2">{description}</p>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[var(--yumsert-orange)] text-white rounded-full py-2 px-4 flex items-center space-x-2"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Tutup</span>
              <span>✨</span>
            </motion.button>
            <div className="absolute bottom-2 right-2 w-12 h-12 bg-[var(--yumsert-orange)] rounded-full opacity-20 animate-spin-slow" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default ProductCard;