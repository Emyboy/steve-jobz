
exports.up = function(knex) {
  return knex.schema.createTable('skillset', t => {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.string('image_url');
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('skillset');
};
