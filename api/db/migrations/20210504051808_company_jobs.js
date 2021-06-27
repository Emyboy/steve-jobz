
exports.up = function (knex) {
    return knex.schema.createTable('company_jobs', t => {
        t.increments('id').primary();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.jsonb('skillsets').notNullable();
        t.jsonb('questions').notNullable();
        t.integer('company_id')
            .notNullable()
            .references('id')
            .inTable('companies')
            .onDelete('CASCADE')
            .index();
        t.integer('salary');
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('company_jobs');
};
