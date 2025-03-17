// backend/routes/routes.js
const express = require('express');
const router = express.Router();

// Simple route to get message
router.get('/message', (req, res) => {
  res.json({ message: 'Matako ine' });
});

module.exports = router;
