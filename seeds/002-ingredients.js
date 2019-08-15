exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "chicken", measurement: 1, recipe_id: 1 },
        { ingredient_name: "flour", measurement: 1, recipe_id: 1 },
        { ingredient_name: "eggs", measurement: 2, recipe_id: 1 },
        {
          ingredient_name: "rib eye steak",
          measurement: 1,
          recipe_id: 2
        },
        { ingredient_name: "flour tortillas", measurement: 10, recipe_id: 2 },
        { ingredient_name: "sour cream", measurement: 1, recipe_id: 2 },
        { ingredient_name: "peppers", measurement: 3, recipe_id: 2 },
        { ingredient_name: "ground beef", measurement: 2, recipe_id: 3 },
        { ingredient_name: "cheese", measurement: 2, recipe_id: 3 },
        { ingredient_name: "buns", measurement: 2, recipe_id: 3 },
        { ingredient_name: "pickles", measurement: 2, recipe_id: 3 },
        { ingredient_name: "potatoes", measurement: 6, recipe_id: 4 },
        {
          ingredient_name: "evaporated milk",
          measurement: 0.75,
          recipe_id: 5
        },
        { ingredient_name: "macaroni", measurement: 75, recipe_id: 5 },
        { ingredient_name: "cheese", measurement: 0.75, recipe_id: 5 }
      ]);
    });
};
