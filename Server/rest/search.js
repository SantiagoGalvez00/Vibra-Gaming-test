const express = require('express');
const router = express.Router();

const search = require('../models/search');

router.get('/search', (req, res) => {
    const data = search.getDataCSV('./Client/src/Recursos/vibra_challenge.csv', req.query)
    res.json(data);
});

module.exports = router;