"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const events = [
  {
    title: "E-Summit 2024",
    date: "March 15-17",
    location: "IIIT Allahabad",
    description: "Annual flagship event with entrepreneurs and investors",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    color: "bg-[rgb(230,180,160)]",
    rotate: -1.5,
  },
  {
    title: "Startup Showcase",
    date: "April 5",
    location: "Innovation Hub",
    description: "Present your startup to potential investors",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    color: "bg-[rgb(255,248,220)]",
    rotate: 1,
  },
  {
    title: "Innovation Challenge",
    date: "May 20-21",
    location: "Virtual & Campus",
    description: "48-hour hackathon solving real-world problems",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    color: "bg-[rgb(245,222,179)]",
    rotate: -2,
  },
  {
    title: "Entrepreneur's Meet",
    date: "June 10",
    location: "Conference Hall",
    description: "Monthly networking with business leaders",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    color: "bg-[rgb(100,120,80)]",
    rotate: 1.5,
  },
];

export default function Events() {
  return (
    <section id="events" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Upcoming Events
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Join us at our flagship events and workshops
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: event.rotate }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
              className={`${event.color} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer ${
                index === 0 ? 'md:mt-0' :
                index === 1 ? 'md:-mt-12' :
                index === 2 ? 'md:mt-8' :
                'md:-mt-6'
              }`}
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className={`text-2xl font-bold mb-3 ${
                  event.color.includes('100,120,80') ? 'text-white' : 'text-gray-900 dark:text-gray-900'
                }`}>
                  {event.title}
                </h3>
                <div className={`flex items-center text-xs mb-2 ${
                  event.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
                }`}>
                  <Calendar className="w-3.5 h-3.5 mr-2" />
                  {event.date}
                </div>
                <div className={`flex items-center text-xs mb-4 ${
                  event.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
                }`}>
                  <MapPin className="w-3.5 h-3.5 mr-2" />
                  {event.location}
                </div>
                <p className={`text-xs leading-relaxed ${
                  event.color.includes('100,120,80') ? 'text-white/80' : 'text-gray-700 dark:text-gray-700'
                }`}>
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}