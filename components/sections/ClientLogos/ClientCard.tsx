"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientLogoType } from "./types";

interface ClientCardProps {
  client: ClientLogoType;
  index: number;
}

export function ClientCard({ client, index }: ClientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="relative w-full h-full">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            className="object-contain"
          />
        </div>
      </Card>
    </motion.div>
  );
}