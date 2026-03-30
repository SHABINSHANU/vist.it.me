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

export const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
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
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="timeline-dot"></div>
          <motion.div 
            className="timeline-content"
            whileHover={{ x: 10, borderColor: "var(--accent-color)", boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
          >
            <h3>Expertzlab Technologies</h3>
            <h4>Software Developer</h4>
            <span className="timeline-date">Jun 2025 – Feb 2026 | Kochi, India</span>
            <ul>
                <li>Completed hands-on training in Python full stack development, covering both frontend and backend technologies.</li>
                <li>Developed web applications using Python, HTML, CSS, JavaScript, and frameworks like Django/Flask.</li>
                <li>Designed and integrated RESTful APIs for seamless data communication.</li>
                <li>Worked with databases such as MySQL/SQLite for data storage and management.</li>
                <li>Implemented user authentication and basic security features.</li>
                <li>Gained experience in version control using Git/GitHub and collaborated on mini projects, improving teamwork.</li>
                <li>Debugged and optimized code for better performance and learned application hosting concepts.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="timeline-dot"></div>
          <motion.div 
            className="timeline-content"
            whileHover={{ x: 10, borderColor: "var(--accent-color)", boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
          >
            <h3>Infogate Technologies</h3>
            <h4>Database Administrator (Assist)</h4>
            <span className="timeline-date">Dec 2024 – Jun 2025 | Tirur, India</span>
            <ul>
                <li>Assisted in managing and maintaining SQL databases for internal and client-facing applications.</li>
                <li>Supported the creation, modification, and optimization of SQL queries, stored procedures, and views.</li>
                <li>Monitored database performance and ran diagnostics to ensure efficiency and uptime.</li>
                <li>Performed regular data backups, restorations, and ensured data integrity.</li>
                <li>Helped in user account setup, access control, and patch installations with senior DBAs.</li>
                <li>Generated reports using SQL queries, participated in troubleshooting, and supported end-users.</li>
                <li>Maintained security protocols for sensitive data and assisted in documenting database structures for audit.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="timeline-item"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="timeline-dot"></div>
          <motion.div 
            className="timeline-content"
            whileHover={{ x: 10, borderColor: "var(--accent-color)", boxShadow: "0 0 20px rgba(34, 211, 238, 0.2)" }}
          >
            <h3>Amazone Manpower</h3>
            <h4>HR Assistant</h4>
            <span className="timeline-date">Sept 2024 – Nov 2024 | Bengaluru, India</span>
            <ul>
                <li>Supported onboarding, exit processes, and managed attendance and leave tracking.</li>
                <li>Handled documentation, data entry, and filing using Microsoft Excel &amp; Word.</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
