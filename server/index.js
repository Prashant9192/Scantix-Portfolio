const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client/build')));

// React app routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});