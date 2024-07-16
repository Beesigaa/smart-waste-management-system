// backend/controllers/binController.js
const Bin = require('../models/Bin');

exports.getBins = async (req, res) => {
    try {
        const bins = await Bin.find();
        res.json(bins);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bins' });
    }
};

exports.updateBinStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        const bin = await Bin.findById(id);
        if (bin) {
            bin.status = status;
            bin.lastUpdated = new Date();
            await bin.save();
            res.json({ message: 'Bin status updated' });
        } else {
            res.status(404).json({ error: 'Bin not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update bin status' });
    }
};

