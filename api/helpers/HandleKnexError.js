



module.exports = (err) => {
    console.log('ERROR FROM KNEX HANDLER --', err);
    switch (err.routine) {
        case '_bt_check_unique':
            const consts = err.constraint.split('_')
            const field = consts[1];
            return `${field} must be unique`
        default:
            return false
    }
}

