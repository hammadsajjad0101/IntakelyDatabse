/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Appointments", function (table) {
    table.increments("AppointmentID").primary();
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
      .integer("StaffUserID")
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("AppointmentTypeID")
      .notNullable()
      .references("AppointmentTypeID")
      .inTable("AppointmentTypes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("AppointmentStatusID")
      .notNullable()
      .references("AppointmentStatusID")
      .inTable("AppointmentStatuses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("StartDateTime");
    table.timestamp("EndDateTime");
    table.string("Location");
    table.string("Subject");
    table.text("Description");
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
  return knex.schema.dropTable("Appointments");
};
