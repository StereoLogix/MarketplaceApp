const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

dotenv.config({ path: './.env' });

console.log('MongoDB URI:', process.env.MONGODB_URI);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to DressStore application.' });
});

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.error('Cannot connect to the database', err);
    process.exit();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
