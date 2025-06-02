import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ChatBubble from '../components/ChatBubble';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
};
const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.3 } }),
};

function Home({ theme, toggleTheme }) {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selfReward = [
    { name: 'Pudding Coklat', image: '/assets/images/coklat-regal-pudding.jpg', category: 'Self Reward', description: 'Puding coklat lembut dengan rasa manis pas.' },
    { name: 'Vanilla Coklat', image: '/assets/images/vanilla-coklat-roti.jpg', category: 'Self Reward', description: 'Lembut vanilla dan coklat manis yang pas.' },
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju-roti.jpg', category: 'Self Reward', description: 'Vanila lembut dengan keju gurih.' },
    { name: 'Pudding Coklat Regal', image: '/assets/images/coklat-regal-pudding.jpg', category: 'Self Reward', description: 'Perpaduan coklat dan regal lembut.' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo-roti.jpg', category: 'Self Reward', description: 'Vanila creamy dengan crunch Oreo.' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal-roti.jpg', category: 'Self Reward', description: 'Vanilla elegan dengan sentuhan regal.' },
  ];

  const selfLove = [
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju.jpg', category: 'Self Love', description: 'Vanilla dengan keju gurih, treat hemat.' },
    { name: 'Vanilla Choco Ball', image: '/assets/images/vanilla-choco-ball.jpg', category: 'Self Love', description: 'Bola coklat vanilla yang nendang.' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo.jpg', category: 'Self Love', description: 'Vanilla dengan crunch Oreo.' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal.jpg', category: 'Self Love', description: 'Vanilla elegan, harga ramah.' },
  ];

  const teamMembers = [
    { name: 'Abror Rozaqi', role: 'Web Developer & Design Lead' },
    { name: 'Chandra Bagus', role: 'Marketing Manager & Social Manager' },
    { name: 'Andreas Gale', role: 'General Manager & Production' },
    { name: 'Amanda Jasmyne', role: 'Head of Production' },
    { name: 'Anas Nur Hidayat', role: 'Accounting & Production' },
  ];

  const tagline = "Waktunya Kasih Self Reward".split(' ');

  const testimonials = [
    { name: 'Chikal', text: 'Yumsert bikin hariku lebih manis, recommended banget!' },
    { name: 'Abimanyu', text: 'Rasa premium dengan harga terjangkau, suka!' },
    { name: 'Tesya', text: 'Pelayanan cepat dan dessertnya enak sekali!' },
    { name: 'King Ansa Premium', text: 'Kualitas top, pasti balik lagi!' },
    { name: 'Risa', text: 'Dessert favoritku sekarang, mantap!' },
    { name: 'Lina', text: 'Rasa manisnya pas, cocok buat self reward!' },
    { name: 'Dito', text: 'Pilihan varian banyak, semua enak!' },
    { name: 'Sari', text: 'Yumsert selalu jadi pilihan dessertku!' },
  ];

  const faqs = [
    { question: 'Berapa minimal pesan?', answer: 'Minimal pesan 1 item per varian.' },
    { question: 'Apakah ada ongkir?', answer: 'Tergantung lokasi, cek di halaman kontak.' },
    { question: 'Bisa custom rasa?', answer: 'Saat ini belum, tapi akan ada update!' },
    { question: 'Berapa lama pengiriman?', answer: 'Estimasi 1-2 hari untuk area Malang.' },
    { question: 'Apakah ada diskon?', answer: 'Ada diskon untuk pembelian di atas 5 item.' },
    { question: 'Bagaimana cara pesan?', answer: 'Langsung chat kami via WhatsApp atau email.' },
  ];

  return (
    <div className="min-h-screen font-poppins text-[var(--text-color)] bg-[var(--bg-color)] relative" data-theme={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} setActiveSection={setActiveSection} />
      <motion.section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <div className="sticker top-10 left-10 w-20 h-20 bg-yumsert-orange rounded-full animate-spin-slow" />
        <div className="sticker bottom-20 right-20 w-16 h-16 bg-yumsert-blue rounded-full animate-spin-slow" />
        <div className="text-center">
          <motion.h1
            key={currentTitle}
            className="text-5xl md:text-7xl font-bold text-yumsert-blue dark:text-white drop-shadow-lg"
            initial="hidden"
            animate="visible"
          >
            {titles[currentTitle].split('').map((char, index) => (
              <motion.span key={index} custom={index} variants={letterVariants}>
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="text-lg md:text-2xl text-yumsert-orange dark:text-orange-400 mt-4 flex justify-center">
            {tagline.map((word, index) => (
              <motion.span key={index} custom={index} variants={letterVariants} className="mx-1">
                {word}
              </motion.span>
            ))}
          </div>
          <motion.button
            onClick={scrollToProducts}
            className="mt-6 rounded-full py-3 px-6 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Produk Kami
          </motion.button>
        </div>
      </motion.section>
      <motion.section id="products" className="py-16 bg-[var(--section-bg)]" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white text-center mb-8 animate-fade-in">Produk Kami</h2>
          <div className="relative">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-yumsert-blue to-yumsert-orange rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-yumsert-orange dark:text-orange-400 text-center mb-2">Self Reward</h3>
            <p className="text-center text-secondary dark:text-gray-300 mb-6">
              Nikmatin momen spesial dengan Self Reward, dessert premium yang bikin hati bergetar!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selfReward.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
          <div className="relative mt-12">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-yumsert-orange to-yumsert-blue rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-yumsert-orange dark:text-orange-400 text-center mb-2">Self Love</h3>
            <p className="text-center text-secondary dark:text-gray-300 mb-6">
              Self Love, dessert manis yang ramah di kantong untuk kasih sayang ke diri sendiri!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selfLove.map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id="about" className="py-16 bg-[var(--section-bg)] relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="sticker top-10 left-10 w-16 h-16 bg-yumsert-orange rounded-full animate-spin-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4 animate-fade-in">Tentang Kami</h2>
          <p className="text-lg text-secondary dark:text-gray-300 mb-6">
            Kami adalah Tim Ganashakti Malang, menciptakan Yumsert dengan cinta untuk berbagi kebahagiaan melalui dessert manis!
          </p>
          <div className="relative max-w-md mx-auto">
            <div className="relative group">
              <img
                src="/assets/images/kelompok.jpg"
                alt="Tim Ganashakti Malang"
                className="w-full h-auto object-cover rounded-md transition-opacity duration-300 group-hover:opacity-50"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300')}
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <p className="text-white text-lg font-semibold">Tim Ganashakti Malang</p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-[var(--card-bg)] px-3 py-1 rounded-full shadow-md flex items-center space-x-2 animate-fade-in"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-sm font-semibold text-yumsert-blue dark:text-white">{member.name}</span>
                  <span className="text-xs text-secondary dark:text-gray-300">— {member.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.button
            className="inline-block mt-6 rounded-full py-2 px-6 shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Kenal Kami Lebih Dekat
          </motion.button>
        </div>
      </motion.section>
      <motion.section id="testimonials" className="py-16 bg-[var(--bg-color)] relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4 animate-fade-in">Testimoni</h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[var(--card-bg)] p-4 rounded-lg shadow-[var(--card-shadow)] min-w-[250px]"
                >
                  <p className="text-secondary dark:text-gray-300 italic">"{testimonial.text}"</p>
                  <p className="mt-2 font-semibold text-yumsert-blue dark:text-white">- {testimonial.name}</p>
                </div>
              ))}
              {testimonials.map((testimonial, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-[var(--card-bg)] p-4 rounded-lg shadow-[var(--card-shadow)] min-w-[250px]"
                >
                  <p className="text-secondary dark:text-gray-300 italic">"{testimonial.text}"</p>
                  <p className="mt-2 font-semibold text-yumsert-blue dark:text-white">- {testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id="faq" className="py-16 bg-[var(--section-bg)] relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4 animate-fade-in">FAQ</h2>
          <div className="marquee-container">
            <div className="marquee-content">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[var(--card-bg)] p-4 rounded-lg shadow-[var(--card-shadow)] min-w-[250px]"
                >
                  <h3 className="font-semibold text-yumsert-blue dark:text-white">{faq.question}</h3>
                  <p className="text-secondary dark:text-gray-300 mt-2">{faq.answer}</p>
                </div>
              ))}
              {faqs.map((faq, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="bg-[var(--card-bg)] p-4 rounded-lg shadow-[var(--card-shadow)] min-w-[250px]"
                >
                  <h3 className="font-semibold text-yumsert-blue dark:text-white">{faq.question}</h3>
                  <p className="text-secondary dark:text-gray-300 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section id="contact" className="py-16 bg-[var(--bg-color)] relative" variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <div className="sticker bottom-10 right-10 w-20 h-20 bg-yumsert-blue rounded-full animate-spin-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-yumsert-blue dark:text-white mb-4 animate-fade-in">Hubungi Kami</h2>
          <p className="text-lg text-secondary dark:text-gray-300 mb-6">
            Ada pertanyaan? Langsung chat kami, yuk!
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="mailto:yumsert.id@gmail.com"
              className="rounded-full py-2 px-6 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Email
            </motion.a>
            <motion.a
              href="https://wa.me/6285158172880"
              className="bg-green-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-green-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp
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