import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ChatBubble from '../components/ChatBubble';

const sectionVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };
const letterVariants = { hidden: { opacity: 0, y: 20 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }) };

function Home({ theme, toggleTheme }) {
  const controls = useAnimation();
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = [
    'Yumsert Glow Up, Manis Max!',
    'Dessert Vibes, Yumsert Rules!',
    'Manisnya Yumsert, Bikin Hati Melt!',
    'Yumsert, Sweetness Overload!',
    'Level Up Manis Bareng Yumsert!',
    'Yumsert, Rasa yang Bikin Wow!',
    'Sweet Escape with Yumsert!',
    'Yumsert, Manis Tanpa Batas!',
    'Feel the Yumsert Magic!',
    'Yumsert, Happiness in Every Bite!',
  ];

  useEffect(() => {
    const interval = setInterval(() => setCurrentTitle((prev) => (prev + 1) % titles.length), 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToProducts = () => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    controls.start({ y: 0, opacity: 1 });
  };

  const selfReward = [
    { name: 'Pudding Coklat', image: '/assets/images/coklat-regal-pudding.jpg', category: 'Self Reward', description: 'Sekali coba, langsung jatuh cinta. Puding coklat lembut ini punya rasa manis yang pas dan bikin nagih.' },
    { name: 'Vanilla Coklat', image: '/assets/images/vanilla-coklat-roti.jpg', category: 'Self Reward', description: 'Lembutnya vanilla dan coklat manis yang pas, siap menemani harimu dengan kelezatan yang bikin nagih.' },
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju-roti.jpg', category: 'Self Reward', description: 'Paduan lembutnya vanila dan gurihnya keju siap jadi alasan manis untuk membuat harimu lebih menyenangkan.' },
    { name: 'Pudding Coklat Regal', image: '/assets/images/coklat-regal-pudding.jpg', category: 'Self Reward', description: 'Perpaduan lembutnya coklat dan regal, siap memanjakan lidahmu.' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo-roti.jpg', category: 'Self Reward', description: 'Lembutnya vanila berpadu dengan renyahnya Oreo, siap jadi kombinasi manis yang bikin harimu makin ceria.' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal-roti.jpg', category: 'Self Reward', description: 'Kelembutan vanilla yang elegan dipadukan dengan sentuhan regal premium, bikin setiap suap jadi momen mewah!' },
  ];

  const selfLove = [
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju.jpg', category: 'Self Love', description: 'Vanilla lembut dengan sentuhan keju gurih, affordable treat buat kasih sayang ke diri sendiri!' },
    { name: 'Vanilla Choco Ball', image: '/assets/images/vanilla-choco-ball.jpg', category: 'Self Love', description: 'Kecil tapi nendang! Bola coklat dan vanilla yang manis, cocok buat self-love hemat!' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo.jpg', category: 'Self Love', description: 'Vanilla creamy dengan crunch Oreo, self-love murah yang bikin hati senang!' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal.jpg', category: 'Self Love', description: 'Vanilla elegan dengan harga ramah, perfect buat self-love tanpa mikir dompet!' },
  ];

  const teamMembers = [
    { name: 'Abror Rozaqi', role: 'Marketing & IT Department' },
    { name: 'Chandra Bagus', role: 'Socmed Management & Web Developer' },
    { name: 'Andreas Gale', role: 'General Manager & Production' },
    { name: 'Amanda Jasmyne', role: 'Head of Production' },
    { name: 'Anas Nur Hidayat', role: 'Accounting & Production' },
  ];

  const tagline = "Waktunya Kasih Self Reward".split(' ');

  return (
    <div className="min-h-screen font-poppins text-[var(--text-color)] relative">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <motion.section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="sticker top-10 left-10 w-20 h-20 bg-yumsert-orange rounded-full" />
        <div className="sticker bottom-20 right-20 w-16 h-16 bg-yumsert-blue rounded-full" />
        <div className="text-center">
          <motion.h1
            key={currentTitle}
            className="text-5xl md:text-7xl font-bold text-yumsert-blue dark:text-white drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titles[currentTitle].split('').map((char, index) => (
              <motion.span key={index} custom={index} variants={letterVariants} initial="hidden" animate="visible">
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="text-lg md:text-2xl text-yumsert-orange dark:text-orange-400 mt-4 flex justify-center">
            {tagline.map((word, index) => (
              <motion.span key={index} custom={index} variants={letterVariants} initial="hidden" animate="visible" className="mx-1">
                {word}
              </motion.span>
            ))}
          </div>
          <motion.button
            onClick={scrollToProducts}
            className="mt-6 bg-yumsert-orange text-white py-3 px-6 rounded-full shadow-lg hover:bg-orange-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Produk Kami
          </motion.button>
        </div>
      </motion.section>
      <motion.section id="products" className="py-16" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white text-center mb-8">Produk Kami</h2>
          <div className="relative">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-yumsert-blue to-yumsert-orange rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-yumsert-orange dark:text-orange-400 text-center mb-2">Self Reward</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              Nikmatin momen spesial dengan Self Reward, dessert premium yang bikin hati bergetar! Rasa mewah, kualitas top, buat kamu yang pantas dapetin yang terbaik.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfReward.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          <div className="relative mt-12">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-yumsert-orange to-yumsert-blue rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-yumsert-orange dark:text-orange-400 text-center mb-2">Self Love</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
              Self Love, dessert manis yang ramah di kantong! Cocok buat kasih sayang ke diri sendiri tanpa bikin dompet nangis, tetap enak dan bikin happy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selfLove.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id="about" className="py-16 bg-[var(--section-bg)] relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="sticker top-10 left-10 w-16 h-16 bg-yumsert-orange rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4">Tentang Kami</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Kami adalah Tim Ganashakti Malang, sebuah tim kreatif yang berdedikasi untuk menghadirkan dessert manis yang bikin hidupmu lebih berwarna! Bersama, kami menciptakan Yumsert dengan cinta dan semangat untuk berbagi kebahagiaan melalui setiap gigitan.
          </p>
          <div className="relative max-w-md mx-auto">
            <div className="relative rounded-lg overflow-hidden shadow-lg border-4 border-yumsert-blue dark:border-blue-700 p-2 bg-gradient-to-r from-yumsert-orange to-yumsert-blue">
              <img
                src="/assets/images/kelompok.jpg"
                alt="Tim Ganashakti Malang"
                className="w-full h-auto object-cover rounded-md"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300')}
              />
              <div className="absolute inset-0 border-2 border-dashed border-white opacity-50 rounded-md"></div>
              <div className="absolute top-2 left-2 w-12 h-12 bg-yumsert-orange rounded-full opacity-30" />
              <div className="absolute bottom-2 right-2 w-12 h-12 bg-yumsert-blue rounded-full opacity-30" />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full shadow-md flex items-center space-x-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-sm font-semibold text-yumsert-blue dark:text-white">{member.name}</span>
                  <span className="text-xs text-gray-600 dark:text-gray-300">— {member.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div className="inline-block mt-6 bg-yumsert-blue dark:bg-blue-700 text-white py-2 px-6 rounded-full shadow-lg" whileHover={{ scale: 1.1 }}>
            Kenal Kami Lebih Dekat
          </motion.div>
        </div>
      </motion.section>
      <motion.section id="contact" className="py-16 relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="sticker bottom-10 right-10 w-20 h-20 bg-yumsert-blue rounded-full" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4">Hubungi Kami</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Ada pertanyaan? Atau mau order? Langsung chat kami, yuk!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a href="https://wa.me/6285158172880" className="bg-green-500 text-white py-2 px-6 rounded-full shadow-lg" whileHover={{ scale: 1.1 }}>
              WhatsApp
            </motion.a>
            <motion.a href="mailto:@gmail.com" className="bg-yumsert-orange text-white py-2 px-6 rounded-full shadow-lg" whileHover={{ scale: 1.1 }}>
              Email
            </motion.a>
          </div>
        </div>
      </motion.section>
      <Footer />
      <ChatBubble />
    </div>
  );
}

export default Home;