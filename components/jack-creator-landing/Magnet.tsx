'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduced = useReducedMotion();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      const withinX = Math.abs(x) <= rect.width / 2 + padding;
      const withinY = Math.abs(y) <= rect.height / 2 + padding;
      const active = withinX && withinY;
      setIsActive(active);

      if (!active) {
        el.style.transform = 'translate3d(0px, 0px, 0px)';
        return;
      }

      const tx = x / strength;
      const ty = y / strength;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    };

    const handleLeave = () => {
      setIsActive(false);
      el.style.transform = 'translate3d(0px, 0px, 0px)';
    };

    el.addEventListener('mousemove', handleMove, { passive: true });
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [padding, strength, reduced]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        willChange: 'transform',
        transition: isActive ? activeTransition : inactiveTransition,
      }}
    >
      {children}
    </div>
  );
}

