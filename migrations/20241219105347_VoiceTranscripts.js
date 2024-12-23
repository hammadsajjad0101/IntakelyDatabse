const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("VoiceTranscripts", function (table) {
    table.increments("VoiceTranscriptID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("CallID", 100);
    table.integer("ParticipantID");
    table.string("ParticipantType", 50);
    table.timestamp("StartDateTime");
    table.timestamp("EndDateTime");
    table.text("Transcript");
    table.string("RecordingLink");
    table.text("Notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("VoiceTranscripts");
};
