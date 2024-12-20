"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface AchievementProps {
  title: string;
  value: string;
  index: number;
}

export function Achievement({ title, value, index }: AchievementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="flex items-center space-x-3"
    >
      <Award className="text-[#00a3ff] h-5 w-5" />
      <div>
        <p className="font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
    </motion.div>
  );
}