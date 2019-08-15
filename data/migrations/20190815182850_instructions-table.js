
exports.up = function(knex) {
  return knex.schema.createTable("instructions", tbl => {
    tbl.increments();
    tbl
      .integer("step_number")
      .notNullable()
      .unsigned();
    tbl.string("step_text", 255).notNullable();
    tbl
      .integer("recipe_id")
      .notNullable()
      .unsigned();
    tbl.foreign("recipe_id").references("recipes.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("instructions");
};

