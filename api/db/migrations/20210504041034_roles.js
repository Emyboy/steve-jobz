
exports.up = function(knex) {
  return knex.schema.createTable('roles', t => {
      t.increments('id').primary();
      t.text('name').notNullable().unique();
      t.integer('users_role_id')
            .references('id')
            .inTable('roles')
            .notNullable()
            .onDelete('CASCADE')
            .index();
      t.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('roles')
};
