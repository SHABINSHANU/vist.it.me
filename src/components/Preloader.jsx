import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.css";

export const Preloader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervalTime = 20; // 0.02 seconds
    const increment = (intervalTime / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoaded, 500); // Small delay before finishing
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onLoaded]);

  return (
    <motion.div
      className="preloader-container"
      exit={{ opacity: 0, scale: 1.1, pointerEvents: "none" }}
      transition={{ duration: 0.8, ease: "circIn" }}
    >
      <div className="preloader-content">
        <motion.div
          className="preloader-logo"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="logo-glitch">SS</div>
        </motion.div>
        
        <div className="progress-bar-container">
          <motion.div 
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="preloader-percentage">
          {Math.floor(progress)}%
        </div>
        
        <motion.div 
          className="preloader-text"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          INITIALIZING_SYSTEM...
        </motion.div>
      </div>
      
      <div className="preloader-overlay"></div>
    </motion.div>
  );
};
