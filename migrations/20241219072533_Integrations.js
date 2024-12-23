/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Integrations", function (table) {
    table.increments("IntegrationID").primary();
    table
      .integer("LawFirmID")
      .unsigned()
      .notNullable()
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
      table.integer("IntegrationTypeID").unsigned().notNullable().references("IntegrationTypeID").inTable("IntegrationTypes").onDelete("CASCADE").onUpdate("CASCADE");
      table.string("APiKey");
      table.string("APISecret");
      table.string("AccessToken")
      table.string("RefreshToken");
      table.text("SettingsJSON");
      table.boolean("IsActive");
      table.timestamp("CreatedDateTime").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable("Integrations");
};
