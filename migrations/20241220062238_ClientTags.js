/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ClientTags", function (table) {
    table.increments("ClientTagID").primary();
    table
      .integer("ClientID")
      .notNullable()
      .references("ClientID")
      .inTable("Clients")
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
  return knex.schema.dropTable("ClientTags");
};
