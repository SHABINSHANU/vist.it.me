import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const floatingAnimation = {
  animate: {
    x: [10, -10, 10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className={`navbar ${isOpen ? "open" : ""}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8
      }}
    >
      <motion.div
        className="logo"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          textShadow: [
            "0 0 10px rgba(34, 211, 238, 0.3)",
            "0 0 20px rgba(34, 211, 238, 0.6)",
            "0 0 10px rgba(34, 211, 238, 0.3)"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
      </motion.div>

      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${isOpen ? "active" : ""}`}></span>
      </button>

      <div
        className={`nav-menu ${isOpen ? "active" : ""}`}
      >
        <motion.ul
          className="nav-links"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#home"
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            > Home</motion.a>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#skills"
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            > Skills</motion.a>
          </motion.li>
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#experience"
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            > Experience</motion.a>
          </motion.li>
          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#education"
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            > Education</motion.a>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.a
              href="#contact"
              onClick={() => setIsOpen(false)}
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.0 }}
            > Contact</motion.a>
          </motion.li>

          <motion.li
            variants={fadeInUp}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/admin/login"
              onClick={() => setIsOpen(false)}
              style={{ 
                color: 'inherit', 
                textDecoration: 'none',
                display: 'inline-block'
              }}
            > Admin</Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};
