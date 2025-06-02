import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function ProductCard({ name, image, category, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        className="bg-[var(--card-bg)] rounded-xl shadow-[var(--card-shadow)] overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full aspect-[4/3] object-contain rounded-t-xl"
            loading="lazy"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/300x225')}
          />
          <div className="absolute top-2 left-2 bg-yumsert-orange text-white text-xs font-bold py-1 px-2 rounded-full">
            {category}
          </div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-yumsert-blue dark:text-white">{name}</h3>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 rounded-full py-1 px-4 transition-all duration-300 hover:shadow-[0_0_10px_#f97316]"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Detail
          </motion.button>
        </div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-[var(--card-bg)] p-6 rounded-lg max-w-md w-full relative shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white hover:text-yumsert-orange"
            >
              ✕
            </button>
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-contain rounded-md mb-4"
              loading="lazy"
              onError={(e) => (e.target.src = 'https://via.placeholder.com/300x225')}
            />
            <h3 className="text-xl font-semibold text-yumsert-blue dark:text-white">{name}</h3>
            <p className="text-secondary dark:text-gray-300 mt-2">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ProductCard;