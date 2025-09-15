import { motion } from 'framer-motion';

/**
 * ScrollIndicator renders a small animated scroll wheel icon with a label to
 * encourage visitors to scroll down from the hero section. The wheel uses
 * framer‑motion to animate the inner dot moving downward in a continuous
 * loop. Positioning of this component should be handled by its parent.
 */
export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center text-white"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {/* Scroll wheel outline */}
      <svg
        width="24"
        height="40"
        viewBox="0 0 24 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current"
      >
        <rect x="1" y="1" width="22" height="38" rx="11" strokeWidth="2" />
        {/* Animated inner dot that moves down repeatedly */}
        <motion.circle
          cx="12"
          cy="12"
          r="3"
          fill="currentColor"
          animate={{ cy: [12, 24] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        />
      </svg>
      <span className="mt-2 text-sm font-medium tracking-wide">Scroll</span>
    </motion.div>
  );
}