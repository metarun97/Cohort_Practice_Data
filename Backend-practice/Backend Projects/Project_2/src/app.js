const express = require('express');
const connectToDB = require('./db/db');
const authRoutes = require('./routes/auth.routes');

connectToDB();

const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

module.exports = app;
