
exports.up = function(knex) {
  return knex.schema.createTable('skillsets', t => {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.string('image_url');
      t.integer('years')
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('skillsets');
};
