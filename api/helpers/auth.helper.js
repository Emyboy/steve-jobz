const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');


module.exports = {

    /**
     * @description - This function is used to has passwords
     * @param {String} myPlaintextPassword - Password in plane text
     * @returns hashed password
     */
    hashPassword: async myPlaintextPassword => {
        return bcrypt.hash(myPlaintextPassword, saltRounds).then(function (hash) {
            // Store hash in your password DB.
            return hash
        });
    },

    /**
     * @description - This function is comparing a plane text password with a hashed password
     * @param {String} textPassword - Password in plane text
     * @param {String} hash - Has password
     * @returns boolean
     */

    comparePasswords: async (textPassword, hash) => {
        try {
            const isPassowrd = await bcrypt.compare(textPassword, hash);
            return isPassowrd;
        } catch (error) {
            return false
        }
    },

    /**
     * @description - this function will generate a new JWT token 
     * @param {Object} user User object returned from DB
     * @returns 
     */
    generateToken: async user => {
        try {
            const token = await jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
            return token;
        } catch (error) {
            throw new Error('JWT Error')
        }
    },

    /**
     * @description - Removed sensitive data from user object
     * @param {Object} userData - User data object
     * @returns - filtered user data
     */
    filterUserData: userData => {
        const newData = { ...userData };
        delete newData.password;
        delete newData.confirm_email_token;
        return newData;
    }

}



