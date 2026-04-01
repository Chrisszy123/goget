'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Toast from './Toast';

interface EmailFormProps {
  variant?: 'hero' | 'cta';
  className?: string;
}

interface ToastState {
  visible: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

export default function EmailForm({ variant = 'hero', className = '' }: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toast, setToast] = useState<ToastState>({
    visible: false,
    message: '',
    type: 'success',
  });

  const showToast = useCallback((message: string, type: ToastState['type']) => {
    setToast({ visible: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, visible: false }));
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading || success) return;

    const trimmed = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmed)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed, referral_source: 'landing_page' }),
      });

      const data = await res.json() as { success: boolean; message: string; alreadyExists?: boolean };

      if (data.success) {
        setSuccess(true);
        showToast(data.message, data.alreadyExists ? 'info' : 'success');
      } else {
        showToast(data.message, 'error');
      }
    } catch {
      showToast('Network error. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex items-center gap-3 px-5 py-4 rounded-2xl bg-[#00E5A0]/10 border border-[#00E5A0]/30 ${className}`}
          role="status"
          aria-live="polite"
        >
          <div className="w-8 h-8 rounded-full bg-[#00E5A0]/20 flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8l3.5 3.5L13 4.5" stroke="#00E5A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-[#F0F0F0] font-semibold text-sm">You&apos;re in!</p>
            <p className="text-[#8A8A9A] text-xs">Check your email — confirmation on the way.</p>
          </div>
        </motion.div>
        <Toast
          message={toast.message}
          type={toast.type}
          isVisible={toast.visible}
          onClose={hideToast}
        />
      </>
    );
  }

  const isHero = variant === 'hero';

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`flex ${isHero ? 'flex-col sm:flex-row' : 'flex-col sm:flex-row'} gap-3 ${className}`}
        noValidate
        aria-label="Join the GoGet waitlist"
      >
        <div className="relative flex-1">
          <label htmlFor={`email-${variant}`} className="sr-only">
            Email address
          </label>
          <input
            id={`email-${variant}`}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="input-dark w-full px-5 py-4 rounded-xl text-sm font-dm focus:outline-none"
            disabled={loading}
            required
            autoComplete="email"
            aria-label="Email address"
          />
        </div>
        <motion.button
          type="submit"
          disabled={loading}
          whileTap={{ scale: 0.97 }}
          className="btn-primary px-7 py-4 text-sm font-semibold whitespace-nowrap flex items-center justify-center gap-2 min-w-[180px] disabled:opacity-70 disabled:cursor-not-allowed"
          aria-label="Join the waitlist"
        >
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.span
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2"
              >
                <svg
                  className="animate-spin w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3"/>
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <span>Joining...</span>
              </motion.span>
            ) : (
              <motion.span
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Join the Waitlist
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </form>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.visible}
        onClose={hideToast}
      />
    </>
  );
}
