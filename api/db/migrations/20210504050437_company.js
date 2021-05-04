
exports.up = function (knex) {
    return knex.schema.createTable('company', t => {
        t.increments('id').primary();
        t.string('name').notNullable().unique();
        t.string('about').notNullable();
        t.string('location').notNullable();
        t.integer('staff_count').defaultTo(0).notNullable();
        t.string('company_logo').defaultTo('https://i.dlpng.com/static/png/7046593_preview.png').notNullable();
        t.string('banner_url').defaultTo('https://sweep.ac.uk/wp-content/uploads/blue-banner.jpg').notNullable();
        t.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .index();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('company');
};
