const express = require('express');
const {
    loginUser,
    signup,
    logoutUser,
    getUserById,
    editUserData
} = require('../controllers/user.controller');
const { verifySession } = require('../middleware/auth.middlware');
const userRoute = express.Router();

const {
    validateSingup,
    handleReqError,
    validateLogin
} = require('../middleware/auth.validator');

userRoute.post('/user', validateSingup, handleReqError, signup);
userRoute.post('/user/auth', validateLogin, handleReqError, loginUser)
userRoute.put('/user/logout', handleReqError, logoutUser);
userRoute.get('/user/:user_id', getUserById);
userRoute.put('/user/:user_id', verifySession, editUserData);

module.exports = userRoute;
