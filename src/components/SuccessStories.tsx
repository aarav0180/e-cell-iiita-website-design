"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    name: "Vikram Malhotra",
    startup: "TechVenture AI",
    quote: "E-Cell provided mentorship and resources that transformed my idea into reality.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    achievement: "Raised $2M in Series A",
  },
  {
    name: "Sneha Kapoor",
    startup: "EcoSolutions",
    quote: "The pitch competitions gave me confidence to pursue my sustainable tech venture.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    achievement: "National Innovation Award 2023",
  },
  {
    name: "Rahul Joshi",
    startup: "HealthTech Plus",
    quote: "From ideation to implementation, E-Cell was there every step of the journey.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    achievement: "Serving 100K+ users",
  },
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Success Stories
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Inspiring journeys of our alumni
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-[rgb(255,248,220)] rounded-3xl p-8 md:p-12 shadow-lg"
            >
              <Quote className="w-10 h-10 text-primary/60 mb-6" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{stories[currentIndex].quote}"
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md">
                  <Image
                    src={stories[currentIndex].image}
                    alt={stories[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-foreground">
                    {stories[currentIndex].name}
                  </h4>
                  <p className="text-xs text-primary font-medium">
                    Founder, {stories[currentIndex].startup}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stories[currentIndex].achievement}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-2.5 bg-[rgb(230,180,160)] rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>

            <div className="flex space-x-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-2.5 bg-[rgb(230,180,160)] rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}