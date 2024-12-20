"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: <Phone className="text-[#00a3ff]" />,
    title: "Phone",
    content: "+256 700 123 456"
  },
  {
    icon: <Mail className="text-[#00a3ff]" />,
    title: "Email",
    content: "info@adornsofttech.com"
  },
  {
    icon: <MapPin className="text-[#00a3ff]" />,
    title: "Location",
    content: "Fort Portal, Uganda"
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start space-x-4"
          >
            {item.icon}
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}