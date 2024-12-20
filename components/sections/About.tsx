"use client";

import { Card } from "@/components/ui/card";
import { Award, Users, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Adorn Soft Tech, we are passionate about solving challenges through technology. Founded with a mission to empower businesses, we specialize in providing innovative, scalable, and efficient tech solutions in Fort Portal, Uganda.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#00a3ff]">50+</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#00a3ff]">100%</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-[#00a3ff]">24/7</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Support</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <div className="text-[#00a3ff]">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Our Vision</h3>
                  <p className="text-gray-600 dark:text-gray-300">To be a leading tech agency in Africa, delivering excellence in technology and customer satisfaction.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <div className="text-[#00a3ff]">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">To empower businesses with transformative, cost-effective, and user-friendly technology solutions that drive growth and success.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 dark:bg-gray-800">
              <div className="flex items-start space-x-4">
                <div className="text-[#00a3ff]">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Our Values</h3>
                  <p className="text-gray-600 dark:text-gray-300">Innovation, integrity, and customer satisfaction are at the core of everything we do.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}