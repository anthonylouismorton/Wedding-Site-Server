'use strict'
const express = require('express');
const app = express();
const inviteeRoute = require('./routes/inviteeRoute');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(inviteeRoute);

module.exports = {
  app,
  start: port => {
    app.listen(port, () => console.log(`listening on ${port}`))
  }
}