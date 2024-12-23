/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable(
    "ClientFinancialResponsibility",
    function (table) {
      table.increments("ResponsibleID").primary();
      table
        .integer("ClientID")
        .references("ClientID")
        .inTable("Clients")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("ResponsiblePartyID")
        .references("ContactID")
        .inTable("Contacts")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.string("Relationship", 100);
      table.text("Notes");
      table.timestamp("Created_at");
      table.timestamp("Modified_at");
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("ClientFinancialResponsibility");
};
