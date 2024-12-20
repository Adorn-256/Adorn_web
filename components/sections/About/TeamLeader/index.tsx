"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LeaderImage } from "./LeaderImage";
import { Quote } from "./Quote";
import { LeaderInfo } from "./LeaderInfo";
import { Achievement } from "./Achievement";
import { ExperienceItem } from "./Experience";
import { leaderData } from "./data";
import { GraduationCap } from "lucide-react";

export function TeamLeader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-16 space-y-8"
    >
      {/* Leader Introduction */}
      <Card className="p-8 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <LeaderImage 
            src={leaderData.image}
            alt={`${leaderData.name} - ${leaderData.role}`}
          />
          <div>
            <motion.h3 
              className="text-2xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Meet Our Leader
            </motion.h3>
            
            {leaderData.introduction.map((quote, index) => (
              <Quote key={index} text={quote} />
            ))}

            <LeaderInfo 
              name={leaderData.name}
              role={leaderData.role}
            />
          </div>
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-8 dark:bg-gray-800/50 backdrop-blur-sm">
        <motion.h4 
          className="text-xl font-semibold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Key Achievements
        </motion.h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {leaderData.achievements.map((achievement, index) => (
            <Achievement
              key={index}
              title={achievement.title}
              value={achievement.value}
              index={index}
            />
          ))}
        </div>
      </Card>

      {/* Experience Timeline */}
      <Card className="p-8 dark:bg-gray-800/50 backdrop-blur-sm">
        <motion.h4 
          className="text-xl font-semibold mb-6 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h4>
        <div className="space-y-6">
          {leaderData.experience.map((exp, index) => (
            <ExperienceItem
              key={index}
              year={exp.year}
              role={exp.role}
              company={exp.company}
              description={exp.description}
              index={index}
            />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center space-x-3 border-t border-muted pt-6"
        >
          <GraduationCap className="text-[#00a3ff] h-5 w-5" />
          <div>
            <p className="font-semibold text-foreground">{leaderData.education.degree}</p>
            <p className="text-sm text-muted-foreground">
              {leaderData.education.university}, {leaderData.education.year}
            </p>
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
}