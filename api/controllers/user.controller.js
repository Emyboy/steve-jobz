const knex = require('../db/index');
const UserService = require('../services/user.service');
var createError = require('http-errors')


class UserController {

    static async signup(req, res, next) {
        try {
            const registeredUser = await UserService.registerUser(req.body);
            res.send(registeredUser)
        } catch (error) {
            return next(createError(400, 'Bad Request'))
        }
    }

}

module.exports = UserController;
