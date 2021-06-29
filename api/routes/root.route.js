const express = require('express');
const userRoute = require('./user.route');
const rootRoute = express.Router();

rootRoute.use(userRoute);

module.exports = rootRoute;

