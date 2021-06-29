
exports.up = function (knex) {
    return knex.schema.createTable('users', t => {
        t.increments('id').primary();
        t.string('first_name', 30).notNullable();
        t.string('last_name', 30).notNullable();
        t.text('username', 12).notNullable().unique();
        t.string('email', 35).notNullable().unique();
        t.string('password').notNullable();
        t.string('title');
        t.string('bio');
        t.boolean('isVerified').defaultTo(false),
        t.string('confirm_email_token');
        t.boolean('email_verified').defaultTo(false),
        t.string('avatar_url').defaultTo('https://cdn.iconscout.com/icon/free/png-256/user-1648810-1401302.png');
        t.text('gender').notNullable();
        t.text('phone_number');
        t.integer('salary');
        t.string('facebook',100);
        t.string('twitter',100);
        t.string('linkedin',100);
        t.string('location');
        t.jsonb('google_location');
        t.integer('role_id').notNullable()
        //     .references('id')
        //     .inTable('roles')
        //     .notNullable()
        //     .onDelete('CASCADE')
        //     .index();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
