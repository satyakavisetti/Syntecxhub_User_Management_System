// server.js
// Entry point for the User Management System API

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const auth = require('./middleware/auth');

// Load environment variables from .env (MONGO_URI, BASIC_USER, BASIC_PASS, PORT)
dotenv.config();

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// MongoDB connection URI (falls back to a local DB if not provided)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/user_management';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err.message);
    process.exit(1);
  });

// Protect API routes with Basic Auth middleware
app.use('/api/users', auth, userRoutes);

// Basic health check endpoint
app.get('/', (req, res) => res.send('User Management System API'));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
