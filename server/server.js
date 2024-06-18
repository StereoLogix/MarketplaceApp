// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

// Load environment variables from .env file
dotenv.config({ path: './.env' });

// Initialize Express app
const app = express();
// Define the port
const PORT = process.env.PORT || 8080;

// Middleware to enable CORS
app.use(cors());
// Middleware to parse JSON requests
app.use(express.json());

// Set up product routes
app.use('/api', productRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.error('Cannot connect to the database', err);
        process.exit();
    });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
