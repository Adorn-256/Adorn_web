"use client";

import { motion } from "framer-motion";

interface LeaderInfoProps {
  name: string;
  role: string;
}

export function LeaderInfo({ name, role }: LeaderInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-6"
    >
      <h4 className="font-bold text-[#00a3ff]">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
    </motion.div>
  );
}