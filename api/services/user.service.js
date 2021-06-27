const db = require('../db/index');
const { hashPassword, generateToken } = require('../helpers/auth.helper');
const HandleKnexError = require('../helpers/HandleKnexError');

module.exports = class UserService {

    static async registerUser(userData) {
        try {
            const {
                email,
                username,
                first_name,
                last_name,
                gender,
            } = userData;
            const hashedPWord = await hashPassword(userData.password);
            const users = await db('users').insert({
                email,
                username,
                first_name,
                last_name,
                gender,
                password: hashedPWord, 
                role_id: 1
            }).returning('*');
            return users
        } catch (error) {
            throw new Error(HandleKnexError(error) || 'Bad Request')
        }
    }

}

