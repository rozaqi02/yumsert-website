import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

function ProductCard({ name, image, category, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef(null);

  return (
    <>
      <motion.div
        ref={cardRef}
        className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden relative"
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <img src={image} alt={name} className="w-full h-auto object-cover" />
          <div className="absolute top-2 right-2 bg-yumsert-orange text-white text-xs font-bold py-1 px-2 rounded-full">{category}</div>
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-yumsert-blue dark:text-white">{name}</h3>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 bg-yumsert-blue dark:bg-blue-700 text-white py-1 px-4 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Cek Sekarang
          </motion.button>
        </div>
      </motion.div>

      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg max-w-md w-full relative"
            initial={{ scale: 0, x: cardRef.current?.getBoundingClientRect().left, y: cardRef.current?.getBoundingClientRect().top }}
            animate={{ scale: 1, x: 0, y: 0 }}
            exit={{ scale: 0, x: cardRef.current?.getBoundingClientRect().left, y: cardRef.current?.getBoundingClientRect().top }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
              ✕
            </button>
            <img src={image} alt={name} className="w-full h-auto object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-yumsert-blue dark:text-white">{name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ProductCard;