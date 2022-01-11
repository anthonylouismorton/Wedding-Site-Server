'use strict'
const app = require('./lib/server.js')
require('dotenv').config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const PORT = process.env.PORT || 3055;
app.start(PORT)
