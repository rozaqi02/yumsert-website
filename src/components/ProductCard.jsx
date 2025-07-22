import { motion } from 'framer-motion';
import { useState } from 'react';

function ProductCard({ name, image, category, description, theme }) {
  const [hearts, setHearts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [stock, setStock] = useState(Math.floor(Math.random() * (18 - 5 + 1)) + 5);
  const [quantity, setQuantity] = useState(1);

  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newHearts = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y: y - i * 10,
      delay: i * 0.1,
    }));
    setHearts((prev) => [...prev, ...newHearts]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => !newHearts.some((h) => h.id === heart.id)));
    }, 1000);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleOrder = () => {
    const message = `Halo, saya ingin memesan ${quantity} ${name} (Stok tersedia: ${stock}).`;
    window.open(`https://wa.me/6285158172880?text=${encodeURIComponent(message)}`, '_blank');
    setIsCartOpen(false);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= stock) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <motion.div
        className="relative rounded-lg overflow-hidden shadow-lg group bg-[var(--section-bg)]"
        whileHover={{ scale: 1.03, y: -5 }} // Mengurangi scale menjadi 1.03 untuk hover yang lebih halus
        whileTap={{ scale: 0.98 }} // Mengurangi scale menjadi 0.98 untuk tap yang sangat minim
        style={{ aspectRatio: '3/4' }}
      >
        <div className="relative">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            style={{ aspectRatio: '3/4' }}
            onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }} // Mengurangi scale menjadi 1.03 untuk hover yang lebih halus
            transition={{ duration: 0.3 }}
            onClick={handleClick}
          />
          {hearts.map((heart) => (
            <motion.span
              key={heart.id}
              className="absolute text-2xl"
              style={{ left: heart.x, top: heart.y }}
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: heart.delay, ease: 'easeOut' }}
            >
              ❤️
            </motion.span>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-white text-sm font-semibold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
          </div>
          <motion.button
            onClick={handleCartClick}
            className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black shadow-md hover:bg-gray-200 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            🛒
          </motion.button>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[var(--text-color)] text-center">{name}</h3>
        </div>
      </motion.div>

      {isCartOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-gray-800' : ''}`}>{name} - Keranjang</h3>
              <motion.button onClick={handleCloseCart} className={`text-gray-500 hover:text-gray-700 ${theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : ''}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                ✕
              </motion.button>
            </div>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-800' : ''}`}>Stok Tersedia: {stock}</p>
            <div className="flex items-center justify-between mb-4">
              <button onClick={() => handleQuantityChange(-1)} className="px-3 py-1 bg-gray-200 rounded-l">-</button>
              <span className={`px-4 ${theme === 'dark' ? 'text-gray-800' : ''}`}>{quantity}</span>
              <button onClick={() => handleQuantityChange(1)} className="px-3 py-1 bg-gray-200 rounded-r">+</button>
            </div>
            <motion.button
              onClick={handleOrder}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pesan via WhatsApp
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default ProductCard;