import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#0A1D37] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-yumsert-orange">Yumsert</h3>
            <p className="mt-2 text-sm">Waktunya Kasih Self Reward</p>
            <p className="mt-4 text-xs">© 2025 Yumsert. All rights reserved.</p>
          </motion.div>
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-yumsert-orange">Produk</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#products" className="hover:text-yumsert-orange">Self Reward</a></li>
              <li><a href="#products" className="hover:text-yumsert-orange">Self Love</a></li>
            </ul>
          </motion.div>
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-yumsert-orange">Hubungi Kami</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="mailto:yumsert.id@gmail.com" className="hover:text-yumsert-orange">Email</a></li>
              <li><a href="https://wa.me/6285158172880" className="hover:text-yumsert-orange">WhatsApp</a></li>
            </ul>
          </motion.div>
          <motion.div
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-yumsert-orange">Ikuti Kami</h4>
            <div className="mt-2 flex space-x-4">
              {[
                { href: 'https://tiktok.com/@yumsert.id', Icon: FaTiktok },
                { href: 'https://instagram.com/yumsert.id', Icon: FaInstagram },
                { href: 'https://facebook.com/yumsert.id', Icon: FaFacebook },
                { href: 'https://twitter.com/yumsert.id', Icon: FaTwitter },
              ].map(({ href, Icon }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  className="text-white hover:text-yumsert-orange"
                  whileHover={{ scale: 1.2 }}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-8 text-center text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Designed with ❤️ by Tim Ganashakti Malang</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;