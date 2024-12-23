"use client";

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

interface DownloadSectionProps {
  onDownload: () => void;
}

export function DownloadSection({ onDownload }: DownloadSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white"
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">Ready to Download</h3>
          <p className="text-white/80">Get your proposal in Microsoft Word format</p>
        </div>
        <button
          onClick={onDownload}
          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 shadow-lg transform hover:scale-105"
        >
          <Download className="w-5 h-5 mr-2" />
          Download as Word
        </button>
      </div>
    </motion.div>
  );
}