const db = require('../db/index');
const { hashPassword, generateToken, comparePasswords } = require('../helpers/auth.helper');
const HandleKnexError = require('../helpers/HandleKnexError');

module.exports = class UserService {

    /**
     * @description - This function will add a new user to DB
     * @param {Object} userData - User data returned from request body
     * @returns - User data object from DB
     */
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

    /**
     * @description - This function logs in a user and sets the session cookies
     * @param {Object} userData - email and password from request body
     * @returns 
     */
    static async loginUser(userData) {
        try {
            const {
                email,
                password
            } = userData;

            const dbUser = await db.select('*').from('users').where({
                email
            });
            const check = await comparePasswords(password, dbUser[0].password);
            if (dbUser.length === 0 || !check) {
                throw new Error()
            }
            return dbUser

        } catch (error) {
            console.log('erro --', error)
            throw new Error(HandleKnexError(error) || 'Incorrect username or password')
        }
    }

}

