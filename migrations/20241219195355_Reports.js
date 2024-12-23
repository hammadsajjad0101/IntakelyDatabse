/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Reports", function (table) {
    table.increments("ReportID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("ReportName");
    table.string("ReportType", 100);
    table.timestamp("GeneratedDate");
    table.text("Parameters");
    table.binary("ReportData");
    table.timestamp("Created_at");
    table.timestamp("Modified_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Reports");
};
