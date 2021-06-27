const db = require('../db/index')

module.exports = class UserService {

    static async registerUser(userData) {
        try {
            console.log('ADDING --', userData)
            const users = await db('users').insert(userData)
            return users
        } catch (error) {
            console.log('ERROR ---', error)
            return false
        }
    }

}

