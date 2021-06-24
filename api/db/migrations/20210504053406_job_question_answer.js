
exports.up = function (knex) {
  return knex.schema.createTable('job_question_answer', t => {
    t.increments('id').primary();
    t.integer('job_question_id')
      .notNullable()
      .references('id')
      .inTable('job_question')
      .onDelete('CASCADE')
      .index();
    t.integer('applicant_id')
      .notNullable()
      .references('id')
      .inTable('user')
      .onDelete('CASCADE')
      .index();
    t.string('answer').notNullable();
    t.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('job_question_answer');
};
