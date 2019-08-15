exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("instructions").insert([
        { step_number: 1, step_text: "Cook the food.", recipe_id: 1 },
        { step_number: 1, step_text: "Cook the food.", recipe_id: 2 },
        { step_number: 1, step_text: "Cook the food.", recipe_id: 3 },
        { step_number: 1, step_text: "Cook the food.", recipe_id: 4 },
        { step_number: 1, step_text: "Cook the food.", recipe_id: 5 }
      ]);
    });
};
