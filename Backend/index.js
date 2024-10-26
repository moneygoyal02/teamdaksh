import express from 'express'; 
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package
import image from './route/image.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Enable CORS for your frontend
app.use(express.json());

// Routes
app.use('/images', image);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
