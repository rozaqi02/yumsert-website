import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

function ChatBubble() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <a href="https://wa.me/6285158172880" target="_blank" rel="noopener noreferrer">
        <div className="chat-button flex items-center space-x-2 bg-green-500 text-white p-3 rounded-full shadow-lg">
          <FaWhatsapp size={24} />
          <span>Chat Yuk!</span>
        </div>
      </a>
    </motion.div>
  );
}

export default ChatBubble;