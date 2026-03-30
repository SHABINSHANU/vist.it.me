import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import profileImg from "../assets/profile.jpeg";

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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> HELLO IAM </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            SHABIN SHANU
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Software Developer & Database Administrator
          </motion.h2>
          <motion.div className="hero-description futuristic-text" variants={fadeInUp}>
            <p>
              Motivated and detail-oriented BCA graduate with professional experience in software development, database administration, and IT support roles. The rapid evolution of technology is reshaping industries, societies, and the way we live.
            </p>
            <p>
              I am deeply motivated to be part of this transformation, with a focus on the IT sector and the innovations that will define the future. My journey so far has been driven by curiosity and hands-on learning, from exploring data analysis and visualization to understanding system-level optimization and workflow efficiency.
            </p>
            <p>
              I believe the future of IT lies in the convergence of artificial intelligence, cloud computing, cybersecurity, and sustainable digital solutions. My goal is to contribute to building systems that are not only powerful and scalable but also ethical, secure, and accessible. By combining technical expertise with creative problem-solving, I aim to design solutions that empower individuals and organizations to thrive in a digital-first world.
            </p>
            <p>
              Through continuous learning and practical projects. My vision is to be at the forefront of this transformation, helping shape an IT ecosystem that drives innovation, inclusivity, and long-term impact.
            </p>
          </motion.div>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            {/* <motion.a
              href="#contacts"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a> */}
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/SHABINSHANU/vist-it-me.git" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://linkedin.com/in/shabin-shanu-147317270" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://x.com/ShabinShan67106" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-image-wrapper">
            <motion.img 
              src={profileImg} 
              alt="SHABIN SHANU" 
              className="profile-img"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              whileHover={{ 
                scale: 1.08, 
                rotate: 2,
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.4)" 
              }}
              transition={{ 
                duration: 0.8, 
                type: "spring", 
                stiffness: 100 
              }}
            />
          </div>


        </motion.div>
      </div>
    </motion.section>
  );
};
