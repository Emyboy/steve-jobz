const express = require("express")
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
const volleyball = require('volleyball');
const path = require('path');

app.use(express.static('build'))
app.use(volleyball)

app.get('/users', (req, res) => {
    res.status(200).json([
        {
            id: 1,
            username: "emyboy"
        }
    ])
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

