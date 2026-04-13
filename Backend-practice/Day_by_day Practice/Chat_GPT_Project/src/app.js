/* Required items */
const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth.routes");
const chatRoutes = require('./routes/chat.routes')

/* Middlewares used */
const app = express();
app.use(express.json());
app.use(cookieParser());

/* Routes used here:-*/
app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);

/* Export data*/
module.exports = app;


