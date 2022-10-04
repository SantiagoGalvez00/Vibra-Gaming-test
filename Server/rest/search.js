const express = require('express');
const router = express.Router();

const search = require('../models/search');

router.get('/search', async (req, res) => {
    const data = await search.getDataCSV('../Client/src/Recursos/vibra_challenge.csv', req.query)
    res.json(data);
});

module.exports = router;