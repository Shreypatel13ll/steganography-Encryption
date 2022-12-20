const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.static('static'));
app.use(cors())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'./static/index.html'));
});

app.listen(5000, () => {
  console.log('App is listening on port 5000');
});