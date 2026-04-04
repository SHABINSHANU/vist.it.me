import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import Admin from './models/Admin.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/portfolio_db')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Check if admin exists
    const adminExists = await Admin.findOne({ email: 'shabinshanu0@gmail.com' });
    if (!adminExists) {
        await Admin.create({
            email: 'shabinshanu0@gmail.com',
            password: 'shabin'
        });
        console.log('Admin created: shabinshanu0@gmail.com / shabin');
    } else {
        console.log('Admin already exists.');
    }
    
    process.exit();
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
  });
