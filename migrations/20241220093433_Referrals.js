/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Referrals", function (table) {
    table.increments("ReferralID").primary();
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
    table.string("ReferrerName");
    table
      .integer("ReferrerTypeID")
      .notNullable()
      .references("ReferrerTypeID")
      .inTable("ReferrerTypes")
      .onDelete("CASCADE"),
      onUpdate("CASCADE");
    table.date("ReferralDate").defaultTo(knex.fn.now());
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
  return knex.schema.dropTable("Referrals");
};
