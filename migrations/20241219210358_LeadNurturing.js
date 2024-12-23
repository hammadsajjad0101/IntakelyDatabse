/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("LeadNurturing", function (table) {
    table.increments("NurturingID").primary();
    table
      .integer("LeadID")
      .references("LeadID")
      .inTable("Leads")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("ActivityType");
    table.timestamp("ScheduledDate"),
      table.enu("Status", ["Pending", "Completed", "Skipped"], {
        useNative: true,
        enumName: "nurturing_status",
      });
    table.text("Notes");
    table.timestamp("Created_at");
    table.timestamp("Modified_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("LeadNurturing");
};
