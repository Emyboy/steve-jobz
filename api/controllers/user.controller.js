const knex = require('../db/index');

class UserController {

    static async signup(req, res) {
        console.log('im called')
        res.status(200).json({ message: 'it worked' })
    }

}

module.exports = UserController;
