
exports.up = function(knex) {
  return knex.schema.createTable('job_question', t => {
      t.increments('id').primary();
      t.string('label').notNullable();
      t.string('placeholder');
      t.boolean('is_required').notNullable();
      t.integer('job_questions_type_id')
      .references('id')
      .inTable('job_question_type')
      .notNullable()
      .onDelete('CASCADE')
      .index();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('job_question')
};
