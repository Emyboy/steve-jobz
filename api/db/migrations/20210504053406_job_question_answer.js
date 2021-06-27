
exports.up = function (knex) {
  return knex.schema.createTable('job_question_answers', t => {
    t.increments('id').primary();
    t.integer('job_question_id')
      .notNullable()
      .references('id')
      .inTable('job_questions')
      .onDelete('CASCADE')
      .index();
    t.integer('applicant_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    t.string('answer').notNullable();
    t.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('job_question_answers');
};
