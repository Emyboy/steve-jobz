
exports.up = function (knex) {
    return knex.schema.createTable('company_job', t => {
        t.increments('id').primary();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.jsonb('skillsets').notNullable();
        t.jsonb('questions').notNullable();
        t.integer('company_id')
            .notNullable()
            .references('id')
            .inTable('company')
            .onDelete('CASCADE')
            .index();
        t.text('salary');
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('company_job');
};
