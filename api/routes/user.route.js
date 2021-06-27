const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/user.controller');

const {
    validateSingup,
    handleReqError
} = require('../middleware/validator');

const {
    signup,
    logoutUser
} = userController;

userRoute.post('/user', validateSingup, handleReqError, signup);
userRoute.put('/user/logout', handleReqError, signup);

module.exports = userRoute;
