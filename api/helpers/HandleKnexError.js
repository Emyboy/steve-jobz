

module.exports = (err) => {
    switch (err.routine) {
        case '_bt_check_unique':
            const consts = err.constraint.split('_')
            const field = consts[1];
            return `${field} is aready in use`
        default:
            return false
    }
}

