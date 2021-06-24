
exports.up = function (knex) {
    return knex.schema.createTable('job_question_type', t => {
        t.increments('id').primary();
        t.string('name').notNullable();
        t.timestamps(true, true);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('job_question_type');
};
