/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("IntegrationTypes", function (table) {
    table.increments("IntegrationTypeID").primary();
    table.string("TypeName").notNullable();
    table.text("Description");
    table.string("APIEndPoint").notNullable();
    table.string("DocumentationURL").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("IntegrationTypes");
};
