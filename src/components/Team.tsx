"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aarav Sharma",
    role: "President",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(230,180,160)]",
    rotate: -1,
  },
  {
    name: "Diya Patel",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(255,248,220)]",
    rotate: 1.5,
  },
  {
    name: "Rohan Verma",
    role: "Technical Head",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(245,222,179)]",
    rotate: -1.5,
  },
  {
    name: "Ananya Singh",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(100,120,80)]",
    rotate: 2,
  },
  {
    name: "Arjun Reddy",
    role: "Events Lead",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(230,180,160)]",
    rotate: -2,
  },
  {
    name: "Priya Gupta",
    role: "Design Lead",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    linkedin: "#",
    twitter: "#",
    color: "bg-[rgb(255,248,220)]",
    rotate: 1,
  },
];

export default function Team() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Team
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Passionate individuals driving innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: member.rotate }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 85
              }}
              whileHover={{ 
                y: -10,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`${member.color} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group ${
                index === 0 ? 'lg:mt-0' :
                index === 1 ? 'lg:-mt-8' :
                index === 2 ? 'lg:mt-6' :
                index === 3 ? 'lg:-mt-4' :
                index === 4 ? 'lg:mt-10' :
                'lg:-mt-6'
              }`}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-primary/80 flex items-center justify-center space-x-4"
                >
                  <motion.a
                    href={member.linkedin}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-white" />
                  </motion.a>
                  <motion.a
                    href={member.twitter}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 bg-background/20 rounded-full hover:bg-background/40 transition-colors"
                  >
                    <Twitter className="w-5 h-5 text-white" />
                  </motion.a>
                </motion.div>
              </div>
              <div className="p-5 text-center">
                <h3 className={`text-lg font-bold mb-1 ${
                  member.color.includes('100,120,80') ? 'text-white' : 'text-gray-900 dark:text-gray-900'
                }`}>
                  {member.name}
                </h3>
                <p className={`text-xs font-medium ${
                  member.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
                }`}>
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}