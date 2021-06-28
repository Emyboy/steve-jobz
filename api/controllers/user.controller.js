const knex = require('../db/index');
const UserService = require('../services/user.service');
var createError = require('http-errors');
const { generateToken } = require('../helpers/auth.helper');
var jwt = require('jsonwebtoken');


class UserController {

    /**
     * @description - This method signs a user up and sets session cookies
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    static async signup(req, res) {
        try {
            const registeredUser = await UserService.registerUser(req.body);
            if (registeredUser.length === 1) {
                req.session.token = await generateToken(registeredUser[0]);
                res.status(201).send(registeredUser[0])
            } else {
                res.status(500)
            }

        } catch (error) {
            res.status(400).send(createError(400, error.message))
        }
    };

    /**
     * @description - this method logs in a user and sets session cookies
     * @param {Object} req 
     * @param {Object} res 
     */
    static async loginUser(req, res) {
        try {
            const userData = await UserService.loginUser(req.body);
            if (userData) {
                req.session.token = await generateToken(userData[0]);
                res.status(200).json(userData)
            }
        } catch (error) {
            res.status(400).send(createError(400, error.message))
        }
    }

    static async logoutUser(req, res) {
        req.session.destroy(err => {
            if (err) {
                res.status(400)
            } else {
                res.status(200).json({
                    message: 'Good Bye ☺'
                })
            }
        })
    }

}

module.exports = UserController;
