"use client";

import { motion } from "framer-motion";
import { Users, Calendar, Rocket, GraduationCap } from "lucide-react";

const stats = [
  { icon: Users, label: "Active Members", value: "500+", color: "bg-[rgb(230,180,160)]", rotate: -2 },
  { icon: Calendar, label: "Events Hosted", value: "50+", color: "bg-[rgb(255,248,220)]", rotate: 1 },
  { icon: Rocket, label: "Startups Launched", value: "20+", color: "bg-[rgb(100,120,80)]", rotate: 2 },
  { icon: GraduationCap, label: "Workshops", value: "100+", color: "bg-[rgb(245,222,179)]", rotate: -1 },
];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight"
          >
            Entrepreneurship Cell
            <br />
            <span className="text-primary">IIIT Allahabad</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-muted-foreground mb-12 max-w-xl mx-auto"
          >
            Empowering entrepreneurs through innovation and collaboration
          </motion.p>
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            Join Our Community
          </motion.a>
        </div>

        {/* Floating Stats Grid - Asymmetric Layout */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40, rotate: 0 }}
                animate={{ opacity: 1, y: 0, rotate: stat.rotate }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  rotate: 0,
                  transition: { duration: 0.3 }
                }}
                className={`${stat.color} rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow relative ${
                  index === 0 ? 'lg:mt-8' : 
                  index === 1 ? 'lg:-mt-4' : 
                  index === 2 ? 'lg:mt-12' : 
                  'lg:-mt-2'
                }`}
              >
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${
                  stat.color.includes('100,120,80') ? 'text-white' : 'text-gray-800 dark:text-gray-800'
                }`} />
                <div className={`text-3xl font-bold mb-1 ${
                  stat.color.includes('100,120,80') ? 'text-white' : 'text-gray-900 dark:text-gray-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-xs font-medium ${
                  stat.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}