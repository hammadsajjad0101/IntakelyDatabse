/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("TaskTags", function (table) {
    table.increments("TaskTagID").primary();
    table
      .integer("TaskID")
      .notNullable()
      .references("TaskID")
      .inTable("Tasks")
      .onDelete("CASCADE")
      .onUpdate("CACACADE");
    table
      .integer("TagID")
      .notNullable()
      .references("TagID")
      .inTable("Tags")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("Created_at").defaultTo(knex.fn.now());
    table.timestamp("Modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("TaskTags");
};
