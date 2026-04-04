import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import { API_ENDPOINTS } from "../api/config";

export const AdminDashboard = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        const res = await fetch(API_ENDPOINTS.ADMIN_CONTACTS, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (res.ok) {
          const data = await res.json();
          setMessages(data);
        } else if (res.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }
      } catch (err) {
        console.error("Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(API_ENDPOINTS.ADMIN_CONTACT_DELETE(id), {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message");
      }
    } catch (err) {
      console.error("Error deleting message", err);
    }
  };

  return (
    <div className="admin-container dashboard">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2>Transmission Log</h2>
        <motion.button
          onClick={handleLogout}
          className="admin-logout-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Disconnect
        </motion.button>
      </motion.div>

      <motion.div
        className="dashboard-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {loading ? (
          <div className="admin-loader">Fetching logs...</div>
        ) : messages.length === 0 ? (
          <div className="admin-empty">No transmissions intercepted yet.</div>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Sender</th>
                  <th>Contact</th>
                  <th>Message</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => (
                  <motion.tr
                    key={msg._id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                    <td>{msg.name}</td>
                    <td>{msg.email}</td>
                    <td className="msg-preview">{msg.message}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(msg._id)}
                        className="admin-delete-btn"
                      >
                        Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  );
};
