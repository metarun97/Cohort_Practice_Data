const express = require('express');
const connectToDb = require('./db/db');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
connectToDb();
app.use(express.json());

app.use('/api/auth', authRoutes);


module.exports = app;
