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
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-6"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold">Ready to Download</h3>
          </div>
          <p className="text-gray-600">Get your complete proposal in Microsoft Word format</p>
        </div>

        <motion.button
          onClick={onDownload}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
        >
          <Download className="w-5 h-5" />
          Download
        </motion.button>
      </div>
    </motion.div>
  );
}