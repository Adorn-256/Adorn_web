"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectType } from "./types";

interface PortfolioCardProps {
  project: ProjectType;
  index: number;
}

export function PortfolioCard({ project, index }: PortfolioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden group dark:bg-gray-800">
        <div className="relative h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <span className="text-sm text-[#00a3ff] mb-2 block">{project.category}</span>
          <h3 className="font-bold mb-2">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{project.description}</p>
        </div>
      </Card>
    </motion.div>
  );
}