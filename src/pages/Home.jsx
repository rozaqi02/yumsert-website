import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ChatBot from '../components/ChatBot';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
};

function Home({ theme, toggleTheme }) {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isTitleWrapped, setIsTitleWrapped] = useState(false);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const titleRef = useRef(null);

  const titles = [
    'Waktunya Kasih Self Reward 💖',
    'Manisnya Yumsert, Bikin Hati Melt! 🥳',
    'Yumsert, Sweetness Overload! 🌟',
    'Level Up Manis Bareng Yumsert! 🚀',
    'Yumsert, Rasa yang Bikin Wow! 😍',
    'Sweet Escape with Yumsert! ✨',
    'Yumsert, Manis Tanpa Batas! 💫',
    'Feel the Yumsert Magic! 🪄',
    'Yumsert, Happiness in Every Bite! 🥐',
    'Yumsert, Dessert for Every Mood! 🍩',
    'Yumsert, Treat Yourself Right! 🎉',
    'Yumsert, Sweetness You Deserve! 💝',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'testimonials', 'faq', 'about', 'contact'];
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

  useEffect(() => {
    const checkTitleWrap = () => {
      if (titleRef.current) {
        const titleElement = titleRef.current;
        const titleWidth = titleElement.offsetWidth;
        const containerWidth = titleElement.parentElement.offsetWidth;
        const isWrapped = titleElement.scrollWidth > containerWidth || titleWidth >= containerWidth * 0.9;
        setIsTitleWrapped(isWrapped);
      }
    };

    checkTitleWrap();
    window.addEventListener('resize', checkTitleWrap);
    return () => window.removeEventListener('resize', checkTitleWrap);
  }, [currentTitle, displayedTitle]);

  useEffect(() => {
    setDisplayedTitle('');
    let charIndex = 0;
    const currentText = titles[currentTitle];
    const typingInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        setDisplayedTitle((prev) => prev + currentText[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentTitle]);

  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selfReward = [
    { name: 'Pudding Oreo', image: '/assets/images/oreo-pudding.jpg', category: 'Self Reward', description: 'Puding lembut dengan topping oreo dengan rasa manis pas. 🍫' },
    { name: 'Vanilla Coklat', image: '/assets/images/vanilla-coklat-roti.jpg', category: 'Self Reward', description: 'Lembut vanilla dan coklat manis yang pas. 🥐' },
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju-roti.jpg', category: 'Self Reward', description: 'Vanila lembut dengan keju gurih. 🧀' },
    { name: 'Pudding Coklat Regal', image: '/assets/images/coklat-regal-pudding.jpg', category: 'Self Reward', description: 'Perpaduan coklat dan regal lembut. 🍪' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo-roti.jpg', category: 'Self Reward', description: 'Vanila creamy dengan crunch Oreo. 🍫' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal-roti.jpg', category: 'Self Reward', description: 'Vanilla elegan dengan sentuhan regal. ✨' },
  ];

  const selfLove = [
    { name: 'Vanilla Keju', image: '/assets/images/vanilla-keju.jpg', category: 'Self Love', description: 'Vanilla dengan keju gurih, treat hemat. 🧀' },
    { name: 'Vanilla Choco Ball', image: '/assets/images/vanilla-choco-ball.jpg', category: 'Self Love', description: 'Bola coklat vanilla yang nendang. 🍫' },
    { name: 'Vanilla Oreo', image: '/assets/images/vanilla-oreo.jpg', category: 'Self Love', description: 'Vanilla dengan crunch Oreo. 🍪' },
    { name: 'Vanilla Regal', image: '/assets/images/vanilla-regal.jpg', category: 'Self Love', description: 'Vanilla elegan, harga ramah. ✨' },
  ];

  const teamMembers = [
    { name: 'Abror Rozaqi', role: 'Web Developer & Design Lead' },
    { name: 'Chandra Bagus', role: 'Marketing Manager & Social Manager' },
    { name: 'Andreas Gale', role: 'General Manager & Production' },
    { name: 'Amanda Jasmyne', role: 'Head of Production' },
    { name: 'Anas Nur Hidayat', role: 'Accounting & Production' },
  ];

  const tagline = "Waktunya Kasih Self Reward 💖".split(' ');

  const testimonials = [
    { name: 'Chikal', text: 'Yumsert bikin hariku lebih manis!', image: 'https://i.pravatar.cc/40?img=1' },
    { name: 'Abimanyu', text: 'Rasa premium dengan harga terjangkau!', image: 'https://i.pravatar.cc/40?img=2' },
    { name: 'Tesya', text: 'Pelayanan cepat dan dessertnya enak!', image: 'https://i.pravatar.cc/40?img=3' },
    { name: 'King Ansa', text: 'Kualitas top, pasti balik lagi!', image: 'https://i.pravatar.cc/40?img=4' },
    { name: 'Risa', text: 'Dessert favoritku sekarang!', image: 'https://i.pravatar.cc/40?img=5' },
    { name: 'Lina', text: 'Rasa manisnya pas, cocok buat self reward!', image: 'https://i.pravatar.cc/40?img=6' },
    { name: 'Dito', text: 'Pilihan varian banyak, semua enak!', image: 'https://i.pravatar.cc/40?img=7' },
    { name: 'Sari', text: 'Yumsert selalu jadi pilihan dessertku!', image: 'https://i.pravatar.cc/40?img=8' },
  ];

  const faqs = [
    { question: 'Berapa minimal pesan? 🤔', answer: 'Minimal 1 item per varian.', image: 'https://i.pravatar.cc/40?img=9' },
    { question: 'Apakah ada ongkir? 🚚', answer: 'Tergantung lokasi, cek halaman kontak.', image: 'https://i.pravatar.cc/40?img=10' },
    { question: 'Bisa custom rasa? 🎨', answer: 'Saat ini belum, tapi akan ada update!', image: 'https://i.pravatar.cc/40?img=11' },
    { question: 'Berapa lama pengiriman? ⏰', answer: 'Estimasi 1-2 hari untuk area Malang.', image: 'https://i.pravatar.cc/40?img=12' },
    { question: 'Apakah ada diskon? 💸', answer: 'Ada untuk pembelian di atas 5 item.', image: 'https://i.pravatar.cc/40?img=13' },
    { question: 'Bagaimana cara pesan? 📱', answer: 'Chat via WhatsApp atau email.', image: 'https://i.pravatar.cc/40?img=14' },
  ];

  const visionMission = {
    vision: 'Menjadi pemimpin dalam menciptakan kebahagiaan melalui dessert inovatif yang berkualitas tinggi.',
    mission: 'Memberikan pengalaman manis yang tak terlupakan dengan bahan alami, pelayanan prima, dan harga terjangkau.',
  };

  return (
    <div className="min-h-screen font-poppins text-[var(--text-color)] bg-[var(--bg-color)] relative overflow-hidden">
      {/* Fixed Particles Layer */}
      <div className="particles fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle absolute rounded-full"
            style={{
              width: Math.random() * 3 + 2 + 'px',
              height: Math.random() * 3 + 2 + 'px',
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              background: `var(--particle-color)`,
              animation: `float 8s infinite ease-in-out`,
              animationDelay: `${Math.random() * 10}s`,
              transformOrigin: 'center',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: Math.random() * 2 }}
          />
        ))}
      </div>
      <Navbar theme={theme} toggleTheme={toggleTheme} activeSection={activeSection} setActiveSection={setActiveSection} />
      <motion.section
        id="home"
        className="h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden z-10"
        style={{ backgroundImage: "url('/assets/images/hero-bg.jpg')" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: 'spring', stiffness: 50 }}
      >
        <div className="sticker top-10 left-10 w-20 h-20 bg-gradient-to-br from-[var(--yumsert-blue)] to-[var(--yumsert-orange)] rounded-full animate-spin-slow opacity-50" />
        <div className="sticker bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-[var(--yumsert-orange)] to-[var(--yumsert-blue)] rounded-full animate-spin-slow opacity-50" />
        <div className="sticker top-20 right-40 w-12 h-12 bg-[var(--yumsert-blue)] rounded-full animate-bounce opacity-50" />
        <div className="text-center z-20">
          <motion.h1
            key={currentTitle}
            ref={titleRef}
            className={`text-4xl md:text-6xl font-bold drop-shadow-lg px-4 ${isTitleWrapped ? 'whitespace-normal' : 'whitespace-nowrap'} typing-effect ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedTitle}
          </motion.h1>
          <div className="text-lg md:text-2xl text-[var(--yumsert-orange)] mt-4 flex justify-center">
            {tagline.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="mx-1"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.button
            onClick={scrollToProducts}
            className="mt-6 rounded-full py-3 px-6 shadow-lg bg-[var(--yumsert-orange)] text-white hover:bg-[var(--yumsert-blue)] transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Produk Kami 🚀
          </motion.button>
        </div>
      </motion.section>
      <motion.section
        id="products"
        className="py-16 bg-[var(--section-bg)] relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="sticker top-10 left-20 w-16 h-16 bg-[var(--yumsert-blue)] rounded-full animate-spin-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl font-bold text-center mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
          >
            Produk Kami 🥐
          </h2>
          <div className="relative">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-[var(--yumsert-blue)] to-[var(--yumsert-orange)] rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-[var(--yumsert-orange)] text-center mb-2">Self Reward ✨</h3>
            <p className="text-center text-[var(--text-color)] mb-6">
              Nikmatin momen spesial dengan Self Reward, dessert premium yang bikin hati bergetar! 💖
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {selfReward.map((product, index) => (
                <ProductCard key={index} {...product} theme={theme} />
              ))}
            </div>
          </div>
          <div className="relative mt-12">
            <div className="absolute inset-0 h-1 bg-gradient-to-r from-[var(--yumsert-orange)] to-[var(--yumsert-blue)] rounded-full -top-4" />
            <h3 className="text-2xl font-semibold text-[var(--yumsert-orange)] text-center mb-2">Self Love 💖</h3>
            <p className="text-center text-[var(--text-color)] mb-6">
              Self Love, dessert manis yang ramah di kantong untuk kasih sayang ke diri sendiri! 🌟
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {selfLove.map((product, index) => (
                <ProductCard key={index} {...product} theme={theme} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="testimonials"
        className="py-16 bg-[var(--section-bg)] relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl font-bold mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
          >
            Testimoni 💬
          </h2>
          <div className="space-y-4">
            <div className="marquee-container">
              <motion.div
                className="marquee-content-left flex space-x-4"
                animate={{ x: ['0%', '-100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`duplicate-${index}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="marquee-container">
              <motion.div
                className="marquee-content-right flex space-x-4"
                animate={{ x: ['0%', '100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index + testimonials.length}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`duplicate-${index + testimonials.length}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="marquee-container">
              <motion.div
                className="marquee-content-left flex space-x-4"
                animate={{ x: ['0%', '-100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index + 2 * testimonials.length}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={`duplicate-${index + 2 * testimonials.length}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mx-auto" />
                    <p className="text-[var(--text-color)] italic text-center">"{testimonial.text}"</p>
                    <p className="mt-2 font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">- {testimonial.name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="faq"
        className="py-16 bg-[var(--bg-color)] relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl font-bold mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
          >
            FAQ ❓
          </h2>
          <div className="space-y-4">
            <div className="marquee-container">
              <motion.div
                className="marquee-content-left flex space-x-4"
                animate={{ x: ['0%', '-100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
                {faqs.map((faq, index) => (
                  <motion.div
                    key={`duplicate-${index}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="marquee-container">
              <motion.div
                className="marquee-content-right flex space-x-4"
                animate={{ x: ['0%', '100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index + faqs.length}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
                {faqs.map((faq, index) => (
                  <motion.div
                    key={`duplicate-${index + faqs.length}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="marquee-container">
              <motion.div
                className="marquee-content-left flex space-x-4"
                animate={{ x: ['0%', '-100%'], transition: { x: { repeat: Infinity, duration: 20, ease: 'linear' } } }}
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index + 2 * faqs.length}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
                {faqs.map((faq, index) => (
                  <motion.div
                    key={`duplicate-${index + 2 * faqs.length}`}
                    className="marquee-item flex-shrink-0 w-[33%] min-w-[300px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <img src={faq.image} alt="FAQ" className="w-10 h-10 rounded-full mx-auto" />
                    <h3 className="font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 text-center">{faq.question}</h3>
                    <p className="text-[var(--text-color)] mt-2 text-center">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="about"
        className="py-16 bg-[var(--bg-color)] relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className={`text-4xl font-bold text-center mb-12 animate-fade-in ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
          >
            Tentang Kami 👥
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              className="lg:col-span-1 relative overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              <img
                src="/assets/images/kelompok.jpg"
                alt="Tim Ganashakti Malang"
                className="w-full h-64 object-cover rounded-t-xl"
                onError={(e) => (e.target.src = 'https://via.placeholder.com/400x300')}
                loading="lazy"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[var(--yumsert-blue)] dark:text-gray-200">Tim Ganashakti Malang</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Kami adalah tim kreatif di balik Yumsert!</p>
              </div>
            </motion.div>
            <motion.div
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 mb-4">Visi</h3>
                <p className="text-gray-600 dark:text-gray-400">{visionMission.vision}</p>
              </motion.div>
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 mb-4">Misi</h3>
                <p className="text-gray-600 dark:text-gray-400">{visionMission.mission}</p>
              </motion.div>
              <motion.div
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg col-span-1 md:col-span-2 hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="text-xl font-semibold text-[var(--yumsert-blue)] dark:text-gray-200 mb-4">Tim Kami</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={index}
                      className="bg-[var(--section-bg)] px-3 py-1 rounded-full shadow-md flex items-center space-x-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-sm font-semibold text-[#1e3a8a] dark:text-gray-200">{member.name}</span>
                      <span className="text-xs text-[var(--text-color)]">— {member.role}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.button
                  className="mt-6 inline-block rounded-full py-2 px-6 shadow-lg bg-[var(--yumsert-orange)] text-white hover:bg-[var(--yumsert-blue)] transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Kenal Kami Lebih Dekat 🚀
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
        id="contact"
        className="py-16 bg-[var(--section-bg)] relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="sticker bottom-10 right-10 w-20 h-20 bg-[var(--yumsert-blue)] rounded-full animate-spin-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className={`text-4xl font-bold mb-8 animate-fade-in ${
              theme === 'dark' ? 'text-[#00a3e0]' : 'text-[var(--yumsert-blue)]'
            }`}
          >
            Hubungi Kami 📱
          </h2>
          <p className="text-lg text-[var(--text-color)] mb-6">
            Ada pertanyaan? Langsung chat kami, yuk! 🚀
          </p>
          <div className="flex justify-center space-x-4">
            <motion.a
              href="mailto:yumsert.id@gmail.com"
              className="rounded-full py-2 px-6 shadow-lg bg-[var(--yumsert-orange)] text-white hover:bg-[var(--yumsert-blue)] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Email 📧
            </motion.a>
            <motion.a
              href="https://wa.me/6285158172880"
              className="bg-green-500 text-white rounded-full py-2 px-6 shadow-lg hover:bg-green-600 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp 📲
            </motion.a>
          </div>
        </div>
      </motion.section>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default Home;