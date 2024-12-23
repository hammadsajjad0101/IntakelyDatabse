/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("TaskDependencies", function (table) {
    table.increments("DependencyID").primary();
    table
      .integer("TaskID")
      .references("TaskID")
      .inTable("Tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("DependsOnTaskID")
      .references("TaskID")
      .inTable("Tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("Created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("TaskDependencies");
};
