// require("babel-core/register");
require("babel-polyfill");
require('dotenv').config()
const express = require("express")
const app = express();
const PORT = process.env.PORT;
const volleyball = require('volleyball');
const path = require('path');
const rootRoute = require('./api/routes/root.route');

app.use(express.static('build'))
app.use(volleyball)


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get('/', (req, res) => {
    res.json({ message: 'it worked' })
})

app.use('/api/v1', rootRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

module.exports = app;
