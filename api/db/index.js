const knexfile = require('../../knexfile')
const knex = require("knex")

const db = knex(process.env.NODE_ENV !== 'production' ? knexfile.development : knexfile.production);

module.exports = db;
