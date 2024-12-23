/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("LeadConversions", function (table) {
    table.increments("ConversionID").primary();
    table
      .integer("LeadID")
      .references("LeadID")
      .inTable("Leads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.date("ConversionDate");
    table.string("Method", 100);
    table
      .integer("AssignedStaffID")
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ClientID")
      .references("ClientID")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
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
  return knex.schema.dropTable("LeadConversions");
};
