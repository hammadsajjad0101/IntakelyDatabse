/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("MarketingCampaigns", function (table) {
    table.increments("CampaignID").primary();
    table
      .integer("LawFirmID")
      .references("LawFirmID")
      .inTable("LawFirms")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("CampaignName");
    table.string("CampaignType", 100);
    table.date("StartDate");
    table.date("EndDate");
    table.decimal("Budget", 18, 2);
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
  return knex.schema.dropTable("MarketingCampaigns");
};
