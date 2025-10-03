"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Have questions? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-xs font-medium text-foreground mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[rgb(255,248,220)] rounded-2xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-xs font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[rgb(255,248,220)] rounded-2xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-xs font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[rgb(255,248,220)] rounded-2xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all shadow-sm"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label htmlFor="message" className="block text-xs font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-[rgb(255,248,220)] rounded-2xl px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none shadow-sm"
                  placeholder="Tell us more..."
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitted ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 0, y: -5 }}
              className="bg-[rgb(230,180,160)] rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3"
                >
                  <Mail className="w-5 h-5 text-foreground/70 mt-1" />
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">Email</p>
                    <a
                      href="mailto:ecell@iiita.ac.in"
                      className="text-sm text-foreground hover:text-primary transition-colors font-medium"
                    >
                      ecell@iiita.ac.in
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-3"
                >
                  <MapPin className="w-5 h-5 text-foreground/70 mt-1" />
                  <div>
                    <p className="text-xs text-foreground/60 mb-1">Location</p>
                    <p className="text-sm text-foreground">
                      IIIT Allahabad, Jhalwa<br />Prayagraj, UP 211015
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ rotate: 1.5 }}
              whileHover={{ rotate: 0, y: -5 }}
              className="bg-[rgb(245,222,179)] rounded-3xl p-8 shadow-lg"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white/50 rounded-full hover:bg-white/70 transition-colors shadow-sm"
                >
                  <Linkedin className="w-5 h-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white/50 rounded-full hover:bg-white/70 transition-colors shadow-sm"
                >
                  <Twitter className="w-5 h-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white/50 rounded-full hover:bg-white/70 transition-colors shadow-sm"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 bg-white/50 rounded-full hover:bg-white/70 transition-colors shadow-sm"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}