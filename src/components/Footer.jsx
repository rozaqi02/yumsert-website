import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-yumsert-blue dark:bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h3 className="text-2xl font-bold">Yumsert</h3>
          <p className="mt-2">Waktunya Kasih Self Reward</p>
          <div className="mt-4 flex justify-center space-x-4">
            {[
              { href: 'https://tiktok.com/@yumsert.id', Icon: FaTiktok },
              { href: 'https://instagram.com/yumsert.id', Icon: FaInstagram },
            ].map(({ href, Icon }, index) => (
              <motion.a key={index} href={href} className="text-white hover:text-yumsert-orange" whileHover={{ scale: 1.2 }}>
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="mt-4 text-sm">© 2025 Yumsert. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;