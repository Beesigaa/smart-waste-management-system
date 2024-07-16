// backend/models/Bin.js
const mongoose = require('mongoose');

const binSchema = new mongoose.Schema({
    location: { type: String, required: true },
    status: { type: String, required: true }, // e.g., "empty", "half-full", "full"
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bin', binSchema);

