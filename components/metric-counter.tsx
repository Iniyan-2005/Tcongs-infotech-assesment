"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function MetricCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 90 });

  useEffect(() => { if (isInView) motionValue.set(value); }, [isInView, motionValue, value]);

  useEffect(() => springValue.on("change", (latest) => { if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`; }), [springValue, suffix]);

  return <motion.span ref={ref} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>{`0${suffix}`}</motion.span>;
}
