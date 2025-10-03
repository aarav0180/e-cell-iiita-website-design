"use client";

import { motion } from "framer-motion";
import { 
  Presentation, 
  Sprout, 
  Trophy, 
  Mic, 
  Handshake, 
  Code 
} from "lucide-react";

const activities = [
  {
    icon: Presentation,
    title: "Workshops",
    description: "Intensive learning sessions",
    color: "bg-[rgb(230,180,160)]",
    rotate: -1
  },
  {
    icon: Sprout,
    title: "Incubation",
    description: "Support for early-stage startups",
    color: "bg-[rgb(255,248,220)]",
    rotate: 1.5
  },
  {
    icon: Trophy,
    title: "Pitch Events",
    description: "Showcase ideas to investors",
    color: "bg-[rgb(245,222,179)]",
    rotate: -2
  },
  {
    icon: Mic,
    title: "Guest Talks",
    description: "Learn from industry experts",
    color: "bg-[rgb(100,120,80)]",
    rotate: 1
  },
  {
    icon: Handshake,
    title: "Networking",
    description: "Connect with entrepreneurs",
    color: "bg-[rgb(230,180,160)]",
    rotate: -1.5
  },
  {
    icon: Code,
    title: "Hackathons",
    description: "Build innovative solutions",
    color: "bg-[rgb(255,248,220)]",
    rotate: 2
  },
];

export default function Activities() {
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
            Our Activities
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Programs designed to nurture entrepreneurial talent
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: activity.rotate }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 90
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -12,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`${activity.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer ${
                index === 0 ? 'lg:mt-8' :
                index === 1 ? 'lg:-mt-4' :
                index === 2 ? 'lg:mt-6' :
                index === 3 ? 'lg:-mt-6' :
                index === 4 ? 'lg:mt-10' :
                'lg:-mt-2'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.15, rotate: 10 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <activity.icon className={`w-8 h-8 ${
                  activity.color.includes('100,120,80') ? 'text-white' : 'text-gray-800 dark:text-gray-800'
                }`} />
              </motion.div>
              <h3 className={`text-xl font-bold mb-2 ${
                activity.color.includes('100,120,80') ? 'text-white' : 'text-gray-900 dark:text-gray-900'
              }`}>
                {activity.title}
              </h3>
              <p className={`text-xs leading-relaxed ${
                activity.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
              }`}>
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}