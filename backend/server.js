// backend/server.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// API routes
const routes = require('./routes/routes');
app.use('/api', routes);

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
