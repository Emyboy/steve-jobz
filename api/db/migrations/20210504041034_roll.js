
exports.up = function(knex) {
  return knex.schema.createTable('role', t => {
      t.increments('id').primary();
      t.text('name').notNullable().unique();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('role')
};
