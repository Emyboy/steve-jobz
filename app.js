// require("babel-core/register");
// require("babel-polyfill");
const express = require("express")
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const volleyball = require('volleyball');
const path = require('path');
const rootRoute = require('./api/routes/root.route');

app.use(express.static('build'))
app.use(volleyball)

app.use('/api/v1', rootRoute);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

module.exports = app;
