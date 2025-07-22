import { useState, useEffect, useRef } from 'react';
import { FaTimes, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function ChatBot({ theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState(localStorage.getItem('chatbotUsername') || '');
  const [showNameForm, setShowNameForm] = useState(!username);
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(null);
  const [quickOptions, setQuickOptions] = useState(['Apa itu Yumsert?', 'Harga produk', 'Hubungi kami']);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    if (messages.length === 0 && !isOpen) {
      setMessages([{ text: showNameForm ? 'Halo! Silakan masukkan nama panggilanmu.' : `Halo ${username}! Selamat datang di Yumsert Chat! Apa yang bisa aku bantu? 😊`, sender: 'bot' }]);
    }
    if (messages.length > 0) {
      const lastMessage = messages[messages.length - 1].text.toLowerCase();
      if (lastMessage.includes('produk')) {
        setQuickOptions(['Harga Yumsert', 'Varian Dessert', 'Cara pesan']);
      } else if (lastMessage.includes('kontak') || lastMessage.includes('hubungi')) {
        setQuickOptions(['WhatsApp', 'Email', 'Instagram']);
      } else {
        setQuickOptions(['Apa itu Yumsert?', 'Harga produk', 'Hubungi kami']);
      }
    }
  }, [isOpen, messages.length, username, showNameForm]);

  const handleSetUsername = (e) => {
    e.preventDefault();
    const newUsername = e.target.elements.name.value.trim();
    if (newUsername) {
      setUsername(newUsername);
      localStorage.setItem('chatbotUsername', newUsername);
      setShowNameForm(false);
      setMessages((prev) => [...prev, { text: `${newUsername}! Terima kasih, sekarang apa yang bisa aku bantu tentang Yumsert? 🍰`, sender: 'bot' }]);
    }
  };

  const handleQuickOption = (option) => {
    setInput(option);
    setTimeout(() => {
      sendMessage({ preventDefault: () => {} });
    }, 100);
  };

  const generateResponse = (inputText) => {
    const lowerInput = inputText.toLowerCase().trim();
    const userName = username || 'Teman Yumsert';
    const isGenZ = lowerInput.includes('bro') || lowerInput.includes('sis') || lowerInput.includes('gaskeun') || lowerInput.includes('sip');
    const isNonBaku = lowerInput.includes('makasih') || lowerInput.includes('bgt') || lowerInput.includes('yaudah');

    if (lowerInput.includes('halo') || lowerInput.includes('hai') || lowerInput.includes('hi')) {
      return isGenZ
        ? `${userName} bro/sis! Hai gaskeun, selamat datang di Yumsert Chat! Mau info dessert apa? 🍰`
        : isNonBaku
        ? `${userName}! Hai, makasih udah dateng! Apa yang bisa aku bantu? 😄`
        : `${userName}! Halo, selamat datang di Yumsert Chat! Apa yang bisa aku bantu? 😊`;
    } else if (lowerInput.includes('terima kasih') || lowerInput.includes('makasih') || lowerInput.includes('thx')) {
      return isGenZ
        ? `${userName}! Sip bro, seneng bantu! Ada lagi? 🍰`
        : isNonBaku
        ? `${userName}! Sama-sama, makasih balik! Ada lagi? 😄`
        : `${userName}! Sama-sama! 😊 Ada lagi tentang Yumsert?`;
    } else if (lowerInput.includes('produk') || lowerInput.includes('yumsert') || lowerInput.includes('dessert')) {
      if (lowerInput.includes('harga')) {
        return isGenZ
          ? `${userName} bro! Harga mulai Rp 15.000, murah gaskeun, cek di Produk ya! 🍰`
          : isNonBaku
          ? `${userName}! Harga mulai Rp 15.000, cek di halaman Produk bgt! 😄`
          : `${userName}! 😊 Harga mulai dari Rp 15.000, cek detail di halaman Produk ya!`;
      } else if (lowerInput.includes('varian')) {
        return isGenZ
          ? `${userName} sis! Varian: Pudding Oreo, Vanilla Keju, dll. Keren kan? 🍰`
          : isNonBaku
          ? `${userName}! Varian: Pudding Oreo, Vanilla Keju, dll. Lengkap bgt! 😄`
          : `${userName}! 🌟 Varian: Pudding Oreo, Vanilla Keju, dan lainnya. Lihat di Produk!`;
      } else {
        return isGenZ
          ? `${userName} bro! Dessert manis seperti Pudding Oreo, enak gaskeun! 🍰`
          : isNonBaku
          ? `${userName}! Dessert manis kayak Pudding Oreo, enak bgt! 😄`
          : `${userName}! 🌟 Kami punya dessert seperti Pudding Oreo dan Vanilla Keju. Lihat di Produk!`;
      }
    } else if (lowerInput.includes('kontak') || lowerInput.includes('hubungi')) {
      return isGenZ
        ? `${userName} sis! WA +62 851-5817-2880, IG @yumsert.id. Hubungi gaskeun! 🍰`
        : isNonBaku
        ? `${userName}! WA +62 851-5817-2880, IG @yumsert.id. Hubungi ya! 😄`
        : `${userName}! 📞 Hubungi kami via WhatsApp (+62 851-5817-2880) atau IG @yumsert.id. 😊`;
    } else if (lowerInput.includes('pengiriman') || lowerInput.includes('kirim')) {
      return isGenZ
        ? `${userName} bro! Kirim 1-2 hari, cepet gaskeun! 🍰`
        : isNonBaku
        ? `${userName}! Pengiriman 1-2 hari, oke bgt! 😄`
        : `${userName}! Pengiriman biasanya 1-2 hari tergantung lokasi. 😊`;
    } else if (lowerInput.includes('halal') || lowerInput.includes('sertifikat')) {
      return isGenZ
        ? `${userName} sis! Semua produk halal, gaskeun aman! 🍰`
        : isNonBaku
        ? `${userName}! Produk halal, tenang aja! 😄`
        : `${userName}! Ya, semua produk Yumsert telah tersertifikasi halal. 😊`;
    } else if (lowerInput.includes('bahan') || lowerInput.includes('komposisi')) {
      return isGenZ
        ? `${userName} bro! Bahan alami seperti coklat dan keju, sehat gaskeun! 🍰`
        : isNonBaku
        ? `${userName}! Bahan alami kayak coklat, sehat bgt! 😄`
        : `${userName}! Bahan utama dari coklat dan keju alami yang berkualitas. 🍰`;
    } else if (lowerInput.includes('cara pesan') || lowerInput.includes('pesan')) {
      return isGenZ
        ? `${userName} bro! Cara pesan: 1) Pilih produk, 2) Klik keranjang, 3) Isi jumlah, 4) Pesan via WA +62 851-5817-2880. Gampang gaskeun! 🍰`
        : isNonBaku
        ? `${userName}! Cara pesan: 1) Pilih produk, 2) Klik keranjang, 3) Isi jumlah, 4) Pesan via WA +62 851-5817-2880. Simpel bgt! 😄`
        : `${userName}! 🌟 Cara pesan: 1) Pilih produk di halaman Produk, 2) Klik ikon keranjang, 3) Atur jumlah, 4) Pesan via WhatsApp (+62 851-5817-2880). 😊`;
    } else if (lowerInput.includes('promosi') || lowerInput.includes('diskon')) {
      return isGenZ
        ? `${userName} sis! Ada diskon 10% buat beli 5+ item, cek di Produk gaskeun! 🍰`
        : isNonBaku
        ? `${userName}! Diskon 10% buat 5+ item, cek ya! 😄`
        : `${userName}! 😊 Kami punya promosi diskon 10% untuk pembelian 5 item atau lebih. Cek di Produk!`;
    } else {
      return isGenZ
        ? `${userName} bro! Aku bingung nih 😅 Tanya soal Yumsert gaskeun ya! 🍰`
        : isNonBaku
        ? `${userName}! Aku bingung 😅 Tanya soal Yumsert ya! 😄`
        : `${userName}! Hmm, aku agak bingung nih 😅 Coba tanyakan tentang Yumsert ya!`;
    }
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    setTimeout(() => {
      const botResponse = { text: generateResponse(input), sender: 'bot' };
      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, Math.random() * (700 - 400) + 400); // Loading 0.4-0.7 detik
    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {showWelcomeMessage && !isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          style={{
            backgroundColor: theme === 'dark' ? '#1C2526' : '#FFFFFF',
            color: theme === 'dark' ? '#E5E7EB' : '#1F2937',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
            borderRadius: '16px',
            padding: '12px',
            margin: '8px',
            fontSize: '13px',
            position: 'fixed',
            bottom: '90px',
            cursor: 'pointer',
            zIndex: 2147483647,
            maxWidth: '300px',
            right: '20px',
            fontFamily: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
          onClick={() => setIsOpen(true)}
        >
          Hai, Teman Yumsert! Ada yang bisa kami bantu?
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              backgroundColor: theme === 'dark' ? '#374151' : '#E5E7EB',
              width: '18px',
              height: '18px',
              color: theme === 'dark' ? '#D1D5DB' : '#6B7280',
              borderRadius: '50%',
              padding: '4px',
              margin: '6px',
              fontSize: '10px',
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              border: '1px solid ' + (theme === 'dark' ? '#4B5563' : '#D1D5DB'),
            }}
            onClick={(e) => {
              e.stopPropagation();
              setShowWelcomeMessage(false);
            }}
          >
            <FaTimes />
          </motion.div>
        </motion.div>
      )}

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={`rounded-xl shadow-2xl w-[90%] max-w-[320px] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 100 }}
          >
            <div className={`flex justify-between items-center p-3 rounded-t-xl ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>
              <span className="flex items-center gap-1">
                <img src="/logo.png" alt="Yumsert Chat" className="w-6 h-6 rounded-full" />
                Yumsert Chat
              </span>
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-${theme === 'dark' ? 'white' : 'gray-600'}`}
              >
                <FaTimes />
              </motion.button>
            </div>
            <div ref={chatContainerRef} className={`p-3 h-64 overflow-y-auto space-y-2 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 120 }}
                    className={`text-sm p-2 rounded-lg max-w-[75%] ${msg.sender === 'user' ? 'bg-yumsert-blue text-white self-end ml-2' : 'bg-white text-gray-800 self-start mr-2'}`}
                    style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-sm p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'} self-start mr-2 flex items-center gap-1`}
                    style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}
                  >
                    <FaSpinner className="animate-spin" /> Mengetik...
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {showNameForm ? (
              <form onSubmit={handleSetUsername} className={`p-3 border-t ${theme === 'dark' ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'} flex flex-col gap-2`}>
                <input
                  type="text"
                  name="name"
                  placeholder="Masukkan nama panggilanmu"
                  className={`p-2 border ${theme === 'dark' ? 'border-gray-600 bg-gray-800 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'} rounded-lg focus:outline-none focus:ring-2 focus:ring-yumsert-blue text-sm`}
                />
                <motion.button
                  type="submit"
                  className={`bg-yumsert-blue text-white p-2 rounded-lg hover:bg-yumsert-orange transition-all ${theme === 'dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-90'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Simpan
                </motion.button>
              </form>
            ) : (
              <div className={`p-3 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
                <div className="flex gap-1 mb-2 flex-wrap justify-center">
                  {quickOptions.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleQuickOption(option)}
                      className={`bg-yumsert-blue text-white px-2 py-1 rounded-full text-xs hover:bg-yumsert-orange transition-all ${theme === 'dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-90'}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
                <form onSubmit={sendMessage} className={`flex border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} p-2`}>
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ketik pesan..."
                    className={`flex-1 p-2 border-none focus:outline-none focus:ring-2 focus:ring-yumsert-blue rounded-l-lg ${theme === 'dark' ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-900 placeholder-gray-500'} text-sm`}
                  />
                  <motion.button
                    type="submit"
                    className={`bg-yumsert-blue text-white p-2 rounded-r-lg hover:bg-yumsert-orange transition-all duration-300 ${theme === 'dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-90'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Kirim
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        ) : (
          <motion.div className="relative">
            <motion.button
              className={`bg-yumsert-blue text-white p-3 rounded-full shadow-lg hover:bg-yumsert-orange ${theme === 'dark' ? 'hover:bg-opacity-90' : 'hover:bg-opacity-90'}`}
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
              style={{ backgroundImage: `url('/logo.png')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '50px', height: '50px' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatBot;