"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

interface ExperienceItemProps {
  year: string;
  role: string;
  company: string;
  description: string;
  index: number;
}

export function ExperienceItem({ year, role, company, description, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 * index }}
      viewport={{ once: true }}
      className="relative pl-8 pb-8 border-l border-muted last:pb-0"
    >
      <div className="absolute left-0 -translate-x-1/2 bg-background dark:bg-gray-800 p-1 rounded-full border border-muted">
        <Briefcase className="h-4 w-4 text-[#00a3ff]" />
      </div>
      <p className="text-sm text-muted-foreground">{year}</p>
      <h4 className="font-semibold text-foreground mt-1">{role}</h4>
      <p className="text-sm text-[#00a3ff]">{company}</p>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </motion.div>
  );
}