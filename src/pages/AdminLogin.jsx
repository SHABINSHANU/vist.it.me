import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

export const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/api/login", {
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
      setError("Server error. Ensure backend is running.");
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
            type="email"
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
