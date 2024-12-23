import Link from 'next/link';
import { motion } from 'framer-motion';

export function BrandLogo() {
  return (
    <Link href="/">
      <motion.div 
        className="flex items-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
          ProposalForge
        </span>
      </motion.div>
    </Link>
  );
}