"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  {
    name: "MTN Uganda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MTN_Logo.svg/2048px-MTN_Logo.svg.png"
  },
  {
    name: "Stanbic Bank",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Stanbic_Bank_logo.svg/1200px-Stanbic_Bank_logo.svg.png"
  },
  {
    name: "Uganda Airlines",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Uganda_Airlines_Logo.svg/2560px-Uganda_Airlines_Logo.svg.png"
  },
  {
    name: "Centenary Bank",
    logo: "https://www.centenarybank.co.ug/sites/default/files/centelogo.png"
  },
  {
    name: "NWSC",
    logo: "https://www.nwsc.co.ug/themes/nwsc/images/logo.png"
  },
  {
    name: "UMEME",
    logo: "https://www.umeme.co.ug/wp-content/uploads/2019/05/umeme_logo.png"
  }
];

export function ClientLogos() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Trusted By Leading Companies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 flex items-center justify-center h-24 hover:shadow-lg transition-shadow">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}