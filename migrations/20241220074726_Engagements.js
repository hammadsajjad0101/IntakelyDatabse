/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Engagements", function (table) {
    table.increments("EngagementID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("ClientID")
      .notNullable()
      .references("ClientID")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.date("EngagementDate");
    table
      .integer("EngagementStatusID")
      .notNullable()
      .references("EngagementStatusID")
      .inTable("EngagementStatuses")
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
  return knex.schema.dropTable("Engagements");
};
