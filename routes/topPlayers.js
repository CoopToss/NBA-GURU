const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// Get top 100 players
router.get('/', async (req, res) => {
  try {
    const players = await Player.find().sort({ rank: 1 }).limit(100);
    res.json(players);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
