"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  { name: "TechCorp", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "InnovateLabs", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "StartupHub", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "VentureCapital", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "CloudSystems", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "DigitalWorks", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "DevTools", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "AIFoundry", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
  { name: "DataFlow", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=300&q=80" },
];

export default function Sponsors() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Our Sponsors
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Supported by industry leaders and innovators
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100 * sponsors.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-16 pr-16"
            >
              {[...sponsors, ...sponsors].map((sponsor, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center min-w-[180px]"
                >
                  <div className="relative w-32 h-16 mb-3 grayscale hover:grayscale-0 transition-all duration-300">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-foreground/70">
                    {sponsor.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}