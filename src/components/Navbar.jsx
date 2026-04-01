import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="mobile-menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <span className={`hamburger ${isOpen ? "active" : ""}`}></span>
      </button>

      <motion.div
        className="nav-container"
        variants={floatingAnimation}
        animate="animate"
      >
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="nav-links mobile-open"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {[
                { name: "Home", href: "#home" },
                { name: "Skills", href: "#skills" },
                { name: "Experience", href: "#experience" },
                { name: "Education", href: "#education" },
                { name: "Contact", href: "#contact" }
              ].map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                  >
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        {/* Desktop Links (keep original for non-mobile) */}
        {!isOpen && (
          <motion.ul
            className="nav-links desktop-only"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              { name: "Home", href: "#home" },
              { name: "Skills", href: "#skills" },
              { name: "Experience", href: "#experience" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" }
            ].map((link, i) => (
              <motion.li
                key={link.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.a
                  href={link.href}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                >
                  {link.name}
                </motion.a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </motion.nav>
  );
};
