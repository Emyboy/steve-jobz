const knex = require('../db/index');
const UserService = require('../services/user.service');
var createError = require('http-errors');
const { generateToken } = require('../helpers/auth.helper');
var jwt = require('jsonwebtoken');


class UserController {

    static async signup(req, res, next) {
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
