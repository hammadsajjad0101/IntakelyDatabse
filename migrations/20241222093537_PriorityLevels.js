/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("PriorityLevels", function (table) {
    table.increments("PriorityLevelID").primary();
    table.string("LevelName", 100);
    table.text("Description");
    table.timestamp("Created_at").defaultTo(knex.fn.now());
    table.timestamp("Modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("PriorityLevels");
};
