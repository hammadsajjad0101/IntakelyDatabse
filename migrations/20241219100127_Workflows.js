/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Workflows", function (table) {
    table.increments("WorkflowID").primary();
    table
      .integer("LawFirmID")
      .unsigned()
      .notNullable() // added
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("WorkflowName");
    table.string("TriggerEvent", 100);
    table.text("Conditions");
    table.text("Actions");
    table.boolean("IsActive");
    table
      .integer("CreatedByStaffID")
      .unsigned()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("CreatedDateTIme").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.createTable("Workflows");
};
