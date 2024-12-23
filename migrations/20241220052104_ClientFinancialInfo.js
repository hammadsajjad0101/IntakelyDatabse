const { TableBuilder } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ClientFinancialInfo", function (table) {
    table.increments("FinancialInfoID").primary();
    table
      .integer("ClientID")
      .notNullable()
      .references("ClientID")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("FinancialDataType", 100);
    table.binary("EncryptedData");
    table.text("Notes");
    table.timestamp("Created_at");
    table.timestamp("Modified_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ClientFinancialInfo");
};
