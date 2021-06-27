const knex = require('../db/index');
const UserService = require('../services/user.service');

class UserController {

    static async signup(req, res) {
        try {
            const registeredUser = await UserService.registerUser(req.body);
            res.send(registeredUser)
        } catch (error) {
            res.status(500).json({ message: 'error' })
        }
    }

}

module.exports = UserController;
