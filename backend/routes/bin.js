// backend/routes/bin.js
const express = require('express');
const router = express.Router();
const binController = require('../controllers/binController');

router.get('/', binController.getBins);
router.put('/', binController.updateBinStatus);

module.exports = router;

