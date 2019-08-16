exports.up = function(knex) {
  return knex.schema.createTable("ingredients", tbl => {
    tbl.increments();
    tbl.string("ingredient_name", 255).notNullable();
    tbl
      .float("measurement")
      .notNullable()
      .unsigned();
    tbl
      .integer("recipe_id")
      .notNullable()
      .unsigned();
    tbl.foreign("recipe_id").references("recipes.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("ingredients");
};
