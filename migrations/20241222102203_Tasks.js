/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Tasks", function (table) {
    table.increments("TaskID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("Title");
    table.text("Description");
    table
      .integer("StatusID")
      .notNullable()
      .references("StatusID")
      .inTable("TaskStatuses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("AssignedToStaffID")
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("DueDate");
    table
      .integer("RelatedClientID")
      .notNullable()
      .references("ClientID")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("RelatedLeadID")
      .notNullable()
      .references("LeadID")
      .inTable("Leads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("PriorityLevelID")
      .notNullable()
      .references("PriorityLevelID")
      .inTable("PriorityLevels")
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
  return knex.schema.dropTable("Tasks");
};
