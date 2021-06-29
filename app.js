// require("babel-core/register");
require("babel-polyfill");
require('dotenv').config()
const express = require("express")
const app = express();
const PORT = process.env.PORT;
const volleyball = require('volleyball');
const path = require('path');
const rootRoute = require('./api/routes/root.route');
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session);
const bodyParser = require("body-parser");


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const store = new knexSessionStore({
    knex: require('./api/db/index'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60
});

app.use(session({
    secret: process.env.SECRET,
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    store,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: true,
        secure: process.env.NODE_ENV === 'production'
    }
}));

app.use(express.static('build'));
app.use(volleyball)


app.use('/api/v1', rootRoute);
app.get('/*', (req, res) => {
    req.session.token = 'hi'
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get('/', (req, res) => {
    res.json({ message: 'it worked' })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

module.exports = app;
