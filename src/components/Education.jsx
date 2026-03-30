import { motion } from "framer-motion";

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

export const Education = () => {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>

      <motion.div
        className="timeline"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot"></div>
          <motion.div 
            className="timeline-content"
            whileHover={{ y: -5, borderColor: "var(--accent-color)", boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
          >
            <h3>Acharya Bangalore Business School</h3>
            <h4>BCA Graduate</h4>
            <span className="timeline-date">2021 – 2024 | Bengaluru, India</span>
            <ul>
                <li>Benefited from an autonomous curriculum designed with the latest industry trends and technologies.</li>
                <li>Participated in programs featuring close collaboration with leading corporations.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
