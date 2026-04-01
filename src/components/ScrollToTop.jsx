import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./ScrollToTop.css";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (scrolled / height) * 100;
      setScrollPercentage(percentage);

      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.div
      className="scroll-to-top-wrapper"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="scroll-progress-container" onClick={scrollToTop}>
        <svg className="progress-ring" width="60" height="60">
          <circle
            className="progress-ring-bg"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="4"
            fill="transparent"
            r="26"
            cx="30"
            cy="30"
          />
          <motion.circle
            className="progress-ring-indicator"
            stroke="var(--accent-color)"
            strokeWidth="4"
            fill="transparent"
            r="26"
            cx="30"
            cy="30"
            strokeDasharray="163.36"
            style={{ 
              strokeDashoffset: 163.36 - (163.36 * scrollPercentage) / 100,
              boxShadow: "0 0 10px var(--accent-color)"
            }}
          />
        </svg>
        <button className="scroll-top-btn" aria-label="Scroll to top">
          <i className="fas fa-arrow-up">↑</i>
        </button>
      </div>
    </motion.div>
  );
};
