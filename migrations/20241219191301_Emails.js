/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Emails", function (table) {
    table.increments("EmailID").primary();
    table
      .integer("LawFirmID")
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table.string("FromAddress");
      table.string("ToAddress");
      table.string("Subject");
      table.text("Body");
      table.timestamp("SentDateTime");
      table.enu("Status", ["Sent", "Failed", "Pending"], {
        useNative: true,
        enumName: "email_status"
      });
      table.integer("RelatedEntityID");
      table.string("EnityType",50);
      table.text("Notes");
      table.timestamp("Created_at");
      table.timestamp("Modified_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
