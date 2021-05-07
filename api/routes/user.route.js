const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/user.controller');
const {
    signup
 } = userController;

userRoute.get('/users', signup);

module.exports = userRoute;
 