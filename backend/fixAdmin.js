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
    
    const emails = ['shabinshanu0@gmail.com', 'shabinshanu0gmail.com'];
    
    for (const email of emails) {
        const adminExists = await Admin.findOne({ email: email });
        if (!adminExists) {
            await Admin.create({
                email: email,
                password: 'shabin'
            });
            console.log(`Admin created: ${email} / shabin`);
        } else {
            console.log(`Admin already exists: ${email}. Updating password to 'shabin'.`);
            adminExists.password = 'shabin';
            await adminExists.save();
        }
    }
    
    process.exit();
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
    process.exit(1);
  });
