// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASSWORD
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/api/db/migrations',
    },
    seeds: {
      directory: __dirname + '/api/db/seeds',
    }
  },

  test: {
    client: 'postgresql',
    connection: {
      database: process.env.TEST_DB_NAME,
      user: process.env.TEST_DB_USER,
      password: process.env.TEST_DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/api/db/migrations',
    },
    seeds: {
      tableName: 'knex_migrations',
      directory: __dirname + '/api/db/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: process.env.TEST_DB_NAME,
      user: process.env.TEST_DB_USER,
      password: process.env.TEST_DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/api/db/migrations',
    }
  }, 

  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: __dirname + '/api/db/migrations',
    }
  }

};
