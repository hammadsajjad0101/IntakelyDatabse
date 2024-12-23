/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("CustomFields", function (table) {
    table.increments("CustomFieldID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("EntityType", 100);
    table.integer("EntityID").notNullable();
    table.string("FieldName");
    table.text("FieldValue");
    table.string("DataType", 50);
    table.text("Notes");
    table.timestamp("Created_at").defaultTo(knex.fn.now());
    table.timestamp("Modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("CustomFields");
};
