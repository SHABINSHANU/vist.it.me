import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';

dotenv.config();

const NEW_PASSWORD = 'shabin'; // <-- CHANGE THIS TO YOUR NEW PASSWORD
const ADMIN_EMAIL = 'shabinshanu0@gmail.com';

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio_db')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    const admin = await Admin.findOne({ email: ADMIN_EMAIL });
    
    if (admin) {
        // The password will be automatically hashed by the pre-save hook in Admin.js model
        admin.password = NEW_PASSWORD;
        await admin.save();
        console.log(`SUCCESS: Password updated for ${ADMIN_EMAIL}`);
    } else {
        console.log(`ERROR: Admin user ${ADMIN_EMAIL} not found.`);
    }
    
    process.exit();
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
  });
