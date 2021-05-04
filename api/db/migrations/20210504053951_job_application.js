
exports.up = function (knex) {
    return knex.schema.createTable('job_application', t => {
        t.increments('id').primary();
        t.integer('job_id')
            .notNullable()
            .references('id')
            .inTable('company_job')
            .onDelete('CASCADE')
            .index();
        t.integer('applicant_id')
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .index();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('job_application');
};
