const { toDefaultValue } = require("sequelize/lib/utils");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("ChatTranscripts", function (table) {
    table.increments("ChatID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.integer("ParticipantID");
    table.string("ParticipantType", 50);
    table.timestamp("StartDateTime");
    table.timestamp("EndDateTime");
    table.text("Transcript");
    table.text("Notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("ChatTranscripts");
};
