import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

function ChatBubble() {
  return (
    <motion.div
      className="fixed bottom-8 right-8 bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
    >
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center">
        <FaWhatsapp size={24} />
        <span className="ml-2">Chat Yuk!</span>
      </a>
    </motion.div>
  );
}

export default ChatBubble;