"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Events", href: "#events" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-3">
              E-Cell IIITA
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Fostering innovation and entrepreneurship at IIIT Allahabad
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold text-foreground mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-border text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {currentYear} E-Cell IIIT Allahabad. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}