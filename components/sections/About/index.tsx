"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Award, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Who We Are
            </motion.h2>
            <motion.p 
              className="text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              At Adorn Soft Tech, we are passionate about solving challenges through technology. Founded with a mission to empower businesses, we specialize in providing innovative, scalable, and efficient tech solutions in Fort Portal, Uganda.
            </motion.p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { number: "50+", text: "Projects Completed" },
                { number: "100%", text: "Client Satisfaction" },
                { number: "24/7", text: "Support" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-[#00a3ff]">{stat.number}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              {
                Icon: Target,
                title: "Our Vision",
                description: "To be a leading tech agency in Africa, delivering excellence in technology and customer satisfaction."
              },
              {
                Icon: Award,
                title: "Our Mission",
                description: "To empower businesses with transformative, cost-effective, and user-friendly technology solutions that drive growth and success."
              },
              {
                Icon: Users,
                title: "Our Values",
                description: "Innovation, integrity, and customer satisfaction are at the core of everything we do."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 dark:bg-gray-800">
                  <div className="flex items-start space-x-4">
                    <div className="text-[#00a3ff]">
                      <item.Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}