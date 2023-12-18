const express = require('express');
const cors = require('cors');
const { connectToDatabase } = require('./config/database');
const apiRoutes = require('./routes/api');

const app = express();

connectToDatabase();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

module.exports = app;
