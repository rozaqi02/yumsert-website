import { motion } from 'framer-motion';

function ProductCard({ name, image, category, description }) {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden shadow-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ aspectRatio: '3/4' }}
    >
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ aspectRatio: '3/4', borderRadius: '10px' }}
          onError={(e) => (e.target.src = 'https://via.placeholder.com/300x400')}
        />
        <div
          className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-white font-semibold text-xs flex items-center space-x-1 ${
            category === 'Self Reward' ? 'bg-gradient-to-r from-[var(--yumsert-blue)] to-[var(--yumsert-orange)]' : 'bg-gradient-to-r from-[var(--yumsert-orange)] to-[var(--yumsert-blue)]'
          }`}
        >
          <span>{category}</span>
          <span>{category === 'Self Reward' ? '✨' : '💖'}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[var(--yumsert-blue)] bg-opacity-80 rounded-lg">
          <p className="text-white text-sm font-semibold px-4 py-2 text-center">{description}</p>
        </div>
      </div>
      <div className="p-4 bg-[var(--section-bg)]">
        <h3 className="text-lg font-semibold text-[var(--text-color)]">{name}</h3>
      </div>
    </motion.div>
  );
}

export default ProductCard;