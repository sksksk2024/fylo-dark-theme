import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type TypewriterProps = {
  text: string;
  className?: string;
  speed?: number;
};

export default function Typewriter({
  text,
  className,
  speed = 25,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i === 1) setDisplayedText((prev) => prev + text.charAt(i));
      if (i === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.p
      data-testid="typewriter"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.p>
  );
}
