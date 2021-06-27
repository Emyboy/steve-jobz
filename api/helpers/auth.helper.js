const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');


module.exports = {

    hashPassword: async myPlaintextPassword => {
        return bcrypt.hash(myPlaintextPassword, saltRounds).then(function (hash) {
            // Store hash in your password DB.
            return hash
        });
    },

    generateToken: async user => {
        try {
            const token = await jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
            return token;
        } catch (error) {
            throw new Error('JWT Error')
        }
    }

}



