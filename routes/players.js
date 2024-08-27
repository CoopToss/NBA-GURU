const express = require('express');
const router = express.Router();
const Player = require('../models/Player');

// GET all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new player
router.post('/', async (req, res) => {
    const player = new Player({
        name: req.body.name,
        team: req.body.team,
        position: req.body.position,
        stats: req.body.stats,
        socialMedia: req.body.socialMedia,
        highlights: req.body.highlights
    });

    try {
        const newPlayer = await player.save();
        res.status(201).json(newPlayer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;