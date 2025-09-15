import { motion } from 'framer-motion';
import ScrollIndicator from './ScrollIndicator';

/**
 * HeroSection displays the main headline, subheading and call‑to‑action buttons.
 * It uses an abstract luxury background image stored in the public directory.
 */
export default function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white h-screen flex items-center justify-center pt-24">
      {/* Add top padding to account for the fixed navigation bar */}
      {/* Background image of a luxury property */}
      <img
        src="/villa.jpg"
        alt="Luxurious estate"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Semi‑transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 max-w-5xl text-center px-4">
        <motion.h1
          className="font-display text-4xl sm:text-6xl md:text-7xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Finest Edmonton Estates
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Market maker. Exceptional service. Discover luxury homes, condos and investment properties with unparalleled expertise.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <a
            href="#listings"
            className="bg-primary text-black px-8 py-3 rounded-md font-medium hover:bg-primary/80 transition"
          >
            Browse Listings
          </a>
          <a
            href="#contact"
            className="border border-primary text-primary px-8 py-3 rounded-md font-medium hover:bg-primary hover:text-black transition"
          >
            Contact Omar
          </a>
        </motion.div>
      </div>
      {/* Scroll indicator positioned at the bottom centre */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
}