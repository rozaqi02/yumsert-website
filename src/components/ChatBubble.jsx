import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

function ChatBubble() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <a href="https://wa.me/6285158172880" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
        <FaWhatsapp size={20} />
        <span>Order Disini!</span>
      </a>
    </motion.div>
  );
}

export default ChatBubble;