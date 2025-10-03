"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Events from "@/components/Events";
import Team from "@/components/Team";
import SuccessStories from "@/components/SuccessStories";
import Sponsors from "@/components/Sponsors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <Events />
      <Team />
      <SuccessStories />
      <Sponsors />
      <Footer />
    </main>
  );
}