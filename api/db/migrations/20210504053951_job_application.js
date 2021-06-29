
exports.up = function (knex) {
    return knex.schema.createTable('job_applications', t => {
        t.increments('id').primary();
        t.integer('job_id')
            .notNullable()
            .references('id')
            .inTable('company_jobs')
            .onDelete('CASCADE')
            .index();
        t.integer('applicant_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('job_applications');
};
