import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { API_ENDPOINTS } from "../api/config";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("Cannot reach backend API. If hosted on GitHub pages, ensure you have deployed a backend (e.g. Render) and updated API config.");
    }
  };

  return (
    <div className="admin-container">
      <motion.div
        className="admin-login-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Admin Portal Access</h2>
        {error && <div className="admin-error">{error}</div>}
        <form onSubmit={handleLogin} className="admin-form">
          <input
            type="text"
            placeholder="Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Passphrase"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <motion.button
            type="submit"
            className="admin-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Authenticate
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};
