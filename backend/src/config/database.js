const mongoose = require('mongoose');
require('dotenv').config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw new Error('Error connecting to the database');
  }
};

module.exports = { connectToDatabase };
