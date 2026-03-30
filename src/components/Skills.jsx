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

export const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Skills & Expertise
      </motion.h2>

      <motion.div
        className="skills-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="skill-card" variants={fadeInUp}>
          <h3>Core Competencies</h3>
          <p>Programming, Algorithms, Data Structures, Architecture, Problem Solving</p>
        </motion.div>
        
        <motion.div className="skill-card" variants={fadeInUp}>
          <h3>Software Engineering</h3>
          <p>Scripting, Refactoring, Optimization, Version Control (Git/GitHub), Testing, Documentation</p>
        </motion.div>
        
        <motion.div className="skill-card" variants={fadeInUp}>
          <h3>Systems & Infrastructure</h3>
          <p>Databases (SQL, MySQL, SQLite), Networking, Security, Deployment, Scalability, Integration, Automation</p>
        </motion.div>
        
        <motion.div 
          className="skill-card" 
          whileHover={{ scale: 1.05, y: -10, boxShadow: "0 0 25px var(--accent-color)" }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3>Operations</h3>
          <p>Troubleshooting, Debugging</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
