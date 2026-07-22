"use client";

import { motion, type Variants } from "framer-motion";

const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function MotionReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ delay }}>
      {children}
    </motion.div>
  );
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
