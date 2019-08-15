
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Fried Chicken", servings: 4, difficulty: "medium" },
        { name: "Steak Tacos", servings: 8, difficulty: "easy" },
        { name: "Cheeseburgers", servings: 2, difficulty: "medium" },
        { name: "Mashed Potatoes", servings: 10, difficulty: "easy" },
        { name: "Macaroni and Cheese", servings: 20, difficulty: "hard" }
      ]);
    });
};