const path = require('path');
const express = require('express');
const cors = require('cors');
require('./mongoose');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || '3000';

/*app.use(express.static(path.join(__dirname, '../../node_modules/material-dashboard-react/dist')))
app.use(/^((?!(api)).)*!/, (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});*/

app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});

module.exports = app;