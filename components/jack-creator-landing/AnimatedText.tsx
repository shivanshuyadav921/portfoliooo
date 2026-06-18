'use client';

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useMemo, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

function useCharacterArray(text: string) {
  return useMemo(() => Array.from(text), [text]);
}

function AnimatedChar({
  ch,
  idx,
  step,
  scrollYProgress,
}: {
  ch: string;
  idx: number;
  step: number;
  scrollYProgress: MotionValue<number>;
}) {
  const isSpace = ch === ' ';
  const start = idx * step;
  const end = Math.min(1, start + 0.12);

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  const charKey = `${idx}-${ch}`;

  return (
    <span key={charKey} style={{ display: 'inline-block', whiteSpace: 'pre' }}>
      <span style={{ opacity: 0.2 }} aria-hidden>
        {isSpace ? ' ' : ch}
      </span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {isSpace ? ' ' : ch}
      </motion.span>
    </span>
  );
}

export function AnimatedText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLParagraphElement | null>(null);

  const chars = useCharacterArray(text);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  if (reduced) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    );
  }

  const step = chars.length <= 1 ? 1 : 1 / (chars.length - 1);

  return (
    <p ref={ref} className={className} style={{ position: 'relative' }}>
      {chars.map((ch, idx) => (
        <AnimatedChar key={`${idx}-${ch}`} ch={ch} idx={idx} step={step} scrollYProgress={scrollYProgress} />
      ))}
    </p>
  );
}


