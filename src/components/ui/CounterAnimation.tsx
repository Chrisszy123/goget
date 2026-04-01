'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CounterAnimationProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export default function CounterAnimation({
  target,
  duration = 1500,
  prefix = '',
  suffix = '',
  className = '',
}: CounterAnimationProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current || target === 0) return;
    hasStarted.current = true;

    const startTime = performance.now();
    const startValue = 0;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuart(progress);
      const currentCount = Math.round(startValue + (target - startValue) * easedProgress);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  const formatted = count.toLocaleString();

  return (
    <span ref={ref} className={className} aria-label={`${prefix}${target.toLocaleString()}${suffix}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
