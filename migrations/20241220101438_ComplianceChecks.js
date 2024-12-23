/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ComplianceChecks", function (table) {
    table.increments("ComplianceCheckID").primary();
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
      .integer("ComplianceTypeID")
      .notNullable()
      .references("ComplianceTypeID")
      .inTable("ComplianceTypes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table
      .integer("PerformedByStaffID")
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table.timestamp("DatePerformed").defaultTo(knex.fn.now());
      table.enu("Status", ["Passed", "Failed", "Pending"], {
        useNative: true,
        enumName: "compliance_check_status",
      });
      table.text("Findings");
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
  return knex.schema.dropTable("ComplianceChecks");
};
