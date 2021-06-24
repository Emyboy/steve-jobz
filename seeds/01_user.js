
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        { first_name: 'emeka', last_name: 'ifeora', username: 'emyboy', email: 'emy@mail.com' },
        { first_name: 'john', last_name: 'doe', username: 'johndoe', email: 'john@mail.com' },
        { first_name: 'chew', last_name: 'pow', username: 'chewer', email: 'chewer@mail.com' },
        { first_name: 'bharath', last_name: 'reddy', username: 'reddy', email: 'boss@mail.com' },
      ]);
    });
};
