'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, type, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const colors = {
    success: {
      bg: 'bg-[#111214]',
      border: 'border-[#00E5A0]/30',
      icon: '✓',
      iconColor: 'text-[#00E5A0]',
      iconBg: 'bg-[#00E5A0]/10',
    },
    error: {
      bg: 'bg-[#111214]',
      border: 'border-red-500/30',
      icon: '✕',
      iconColor: 'text-red-400',
      iconBg: 'bg-red-500/10',
    },
    info: {
      bg: 'bg-[#111214]',
      border: 'border-[#7B61FF]/30',
      icon: 'ℹ',
      iconColor: 'text-[#7B61FF]',
      iconBg: 'bg-[#7B61FF]/10',
    },
  };

  const style = colors[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-50"
          role="alert"
          aria-live="polite"
        >
          <div
            className={`flex items-center gap-3 px-4 py-3 rounded-xl border ${style.bg} ${style.border} shadow-2xl max-w-sm`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full ${style.iconBg} flex items-center justify-center`}>
              <span className={`text-sm font-bold ${style.iconColor}`}>{style.icon}</span>
            </div>
            <p className="text-sm text-[#F0F0F0] font-medium leading-snug flex-1">{message}</p>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-[#8A8A9A] hover:text-[#F0F0F0] transition-colors ml-1"
              aria-label="Close notification"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
