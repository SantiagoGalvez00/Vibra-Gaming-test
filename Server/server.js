const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const restSearch = require('./rest/search');

app.use(cors());
app.use('/rest', restSearch);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});