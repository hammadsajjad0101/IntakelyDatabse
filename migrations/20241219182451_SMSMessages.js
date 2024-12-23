/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("SMSMessages", function (table) {
    table.increments("SMSID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("FromNumber", 20);
    table.string("ToNumber", 20);
    table.text("MessageBody");
    table.timestamp("SentDateTime");
    table.enu("Status", ["Sent", "Failed", "Pending"], {
      useNative: true,
      enumName: "message_status",
    });
    table.integer("RelatedEntityID");
    table.string("EntityType", 50);
    table.text("Notes");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("SMSMessages");
};
