import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { API_ENDPOINTS } from "../api/config";

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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      // 1. Redirect directly to WhatsApp
      const whatsappNumber = "917293334322";
      const messageText = `*New Contact Request from Portfolio*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Message:*\n${formData.message}`;
      const encodedMessage = encodeURIComponent(messageText);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Use assign to ensure reliable redirection on mobile browsers rather than window.open
      window.location.assign(whatsappURL);

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Redirecting to WhatsApp!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to open WhatsApp.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message..."
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? (
              <div className="btn-loader">
                <span className="spinner"></span>
                <span>Sending...</span>
              </div>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${formStatus.success ? "success" : "error"
                } `}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
