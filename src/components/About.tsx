"use client";

import { motion } from "framer-motion";
import { Lightbulb, Users, Network, FolderOpen } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "Creative space transforming ideas into reality",
    color: "bg-[rgb(255,248,220)]",
    rotate: -1.5,
    offset: "lg:mt-0"
  },
  {
    icon: Users,
    title: "Mentorship",
    description: "Connect with experienced entrepreneurs",
    color: "bg-[rgb(230,180,160)]",
    rotate: 1,
    offset: "lg:-mt-8"
  },
  {
    icon: Network,
    title: "Networking",
    description: "Build meaningful connections",
    color: "bg-[rgb(245,222,179)]",
    rotate: 2,
    offset: "lg:mt-12"
  },
  {
    icon: FolderOpen,
    title: "Resources",
    description: "Access tools and funding opportunities",
    color: "bg-[rgb(100,120,80)]",
    rotate: -1,
    offset: "lg:-mt-4"
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            About E-Cell
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Building a thriving entrepreneurial ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: feature.rotate }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`${feature.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow ${feature.offset}`}
            >
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <feature.icon className={`w-10 h-10 mb-5 ${
                  feature.color.includes('100,120,80') ? 'text-white' : 'text-gray-800 dark:text-gray-800'
                }`} />
              </motion.div>
              <h3 className={`text-2xl font-bold mb-3 ${
                feature.color.includes('100,120,80') ? 'text-white' : 'text-gray-900 dark:text-gray-900'
              }`}>
                {feature.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                feature.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
              }`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}