"use client";

import { motion } from "framer-motion";

interface QuoteProps {
  text: string;
}

export function Quote({ text }: QuoteProps) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-muted-foreground mb-4"
    >
      {text}
    </motion.p>
  );
}