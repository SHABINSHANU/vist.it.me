// Dynamic API Configuration
// Use the hosted backend URL in production, or localhost in development

const isProduction = import.meta.env.MODE === 'production';

// When you deploy to Render, you will get a URL like https://your-app-name.onrender.com
// This will be set in your Environment Variables on Render as VITE_API_BASE_URL
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

export const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/api/login`,
  CONTACT: `${API_BASE_URL}/api/contact`,
  ADMIN_CONTACTS: `${API_BASE_URL}/api/admin/contacts`,
  ADMIN_CONTACT_DELETE: (id) => `${API_BASE_URL}/api/admin/contact/${id}`,
};
