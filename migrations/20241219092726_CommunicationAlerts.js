/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("CommunicationAlerts", function (table) {
    table.increments("AlertID").primary();
    table
      .integer("LawFirmID")
      .unsigned()
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("AlertType", 100);
    table.integer("RelatedCommunicationID").unsigned();
    table.string("CommunicationType");
    table.text("Description");
    table.timestamp("AlertDateTime").defaultTo(knex.fn.now());
    table.boolean("Resolved");
    table
      .integer("ResolvedByStaffID")
      .unsigned()
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("ResolvedDateTime");
    table.text("Notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("CommunicationAlerts");
};
