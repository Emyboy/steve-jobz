const db = require('../db')


module.exports = {

    verifySession: async (req, res, next) => {
        try {
            const sessionData = await db('sessions').where({ sid: req.session.id }).returning('*');
            if (sessionData.length === 0) {
                req.session.destroy();
                res.status(401).json({ message: 'Unauthorized' })
            } else {
                const { user_id } = sessionData[0].sess;
                const user = await db('users').where({ id: user_id });
                req.user = user;
                next();
            }
        } catch (error) {
            res.status(400).json({ message: 'bad request' })
        }
    }

}

