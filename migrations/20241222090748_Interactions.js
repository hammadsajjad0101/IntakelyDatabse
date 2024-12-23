/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Interactions", function (table) {
    table.increments("InteractionID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ClientID")
      .nullable()
      .references("ClientID")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("LeadID")
      .nullable()
      .references("LeadID")
      .inTable("Leads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("InteractionTypeID")
      .notNullable()
      .references("InteractionTypeID")
      .inTable("InteractionTypes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("DateTime");
    table.string("Subject");
    table.text("Description");
    table
      .integer("CreatedByStaffID")
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
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
  return knex.schema.dropTable("Interactions");
};
