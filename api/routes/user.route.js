const express = require('express');
const {
    loginUser,
    signup,
    logoutUser
} = require('../controllers/user.controller');
const userRoute = express.Router();

const {
    validateSingup,
    handleReqError,
    validateLogin
} = require('../middleware/auth.validator');

userRoute.post('/user', validateSingup, handleReqError, signup);
userRoute.post('/user/auth', validateLogin, handleReqError, loginUser)
userRoute.put('/user/logout', handleReqError, logoutUser);

module.exports = userRoute;
