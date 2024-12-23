/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("SocialMediaProfiles", function (table) {
    table.increments("ProfileID").primary();
    table
      .integer("ClientID")
      .nullable()
      .references("ClientId")
      .inTable("Clients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("StaffID")
      .nullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("Platform", 100);
    table.string("ProfileURL");
    table.string("Username", 100);
    table.text("Bio");
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
  return knex.schema.dropTable("SocialMediaProfiles");
};
