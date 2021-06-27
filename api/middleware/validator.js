const { check, validationResult } = require('express-validator')



module.exports = {

    validateSingup: [
        // email
        check('email', 'Email is required').exists(),
        check('email', 'Invalid email address')
            .isEmail().isLength({ max: 35, min: 5 })
            .isString(),
        // password
        check('password', 'Password is required').exists(),
        check('password', 'Password is too short').isString().isLength({ min: 5 }),
        check('password')
            .custom(value => !/\s/.test(value))
            .withMessage('No spaces are allowed in the password'),
        // first_name
        check('first_name', 'First Name is required').exists().toLowerCase(),
        check('first_name', 'First Name is too long').isString().isLength({ max: 30 }),
        check('first_name')
            .custom(value => !/\s/.test(value))
            .withMessage('No spaces are allowed in first name'),
        // last_name
        check('last_name', 'Last Name is required').exists().toLowerCase(),
        check('last_name', 'Last Name is too long').isString().isLength({ max: 30 }),
        check('last_name')
            .custom(value => !/\s/.test(value))
            .withMessage('No spaces are allowed in last name'),
        // username
        check('username', 'Username is required').exists(),
        check('username', 'Username is too short').isString().isLength({ min: 3 }),
        check('username', 'Username is too long').isString().isLength({ max: 12 }),
        check('username')
            .custom(value => !/\s/.test(value))
            .withMessage('No spaces are allowed for username'),
        check('gender', 'Gender is required').exists().toLowerCase(),
        check('gender', 'Invalid gender').isLength({ max: 1 }).isString(),
    ],
    handleReqError: (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).jsonp(errors.array())
        } else {
            next();
        }
    }

}


