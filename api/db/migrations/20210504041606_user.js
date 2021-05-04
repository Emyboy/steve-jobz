
exports.up = function (knex) {
    return knex.schema.createTable('user', t => {
        t.increments('id').primary();
        t.string('first_name', 25).notNullable();
        t.string('last_name', 25).notNullable();
        t.text('username').notNullable().unique();
        t.string('email', 25).notNullable().unique();
        t.string('password').notNullable();
        t.string('title');
        t.string('bio');
        t.string('avatar_url').defaultTo('https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png');
        t.text('gender').notNullable();
        t.integer('role_id')
            .references('id')
            .inTable('role')
            .notNullable()
            .onDelete('CASCADE')
            .index();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('user');
};
