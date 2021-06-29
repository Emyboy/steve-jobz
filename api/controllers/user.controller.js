const knex = require('../db/index');
const UserService = require('../services/user.service');
var createError = require('http-errors');
const { generateToken, filterUserData } = require('../helpers/auth.helper');
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
                req.session.user_id = registeredUser[0].id;
                res.status(201).send(filterUserData(registeredUser[0]))
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
                req.session.user_id = userData[0].id;
                res.status(200).json(filterUserData(userData[0]))
            }
        } catch (error) {
            res.status(400).send(createError(400, error.message))
        }
    }

    /**
     * @description - Gets user by id
     * @param {Object} req 
     * @param {Object} res 
     */
    static async getUserById(req, res) {
        try {
            const user = await UserService.getDbUserById(req.params.user_id);
            if (user.length > 0) {
                res.send(filterUserData(user[0]))
            } else {
                res.status(404).json({ message: 'not found' })
            }
        } catch (error) {
            res.status(500).send(createError(500, error.message))
        }
    };

    static async editUserData(req, res) {
        try {
            const edited = await UserService.editUserDataOnDb(req.params.user_id, req.body);
            res.status(200).json(edited)
        } catch (error) {
            res.status(500).send(createError(500, 'bad request'))
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
