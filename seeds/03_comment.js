
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        { content: 'nice work', user_id: 4, post_id: 1 },
        { content: 'Good work', user_id: 3, post_id: 2 },
        { content: 'Great work', user_id: 2, post_id: 3 },
        { content: 'Awsome work', user_id: 1, post_id: 4 },
      ]);
    });
};
