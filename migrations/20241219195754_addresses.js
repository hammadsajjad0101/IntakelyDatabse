/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Addresses',(table)=>{
    table.increments('AddressID').primary();
    table.string('StreetAddress', 255).notNullable();
    table.string('City', 100).notNullable();
    table.string('State', 100).notNullable();
    table.string('PostalCode', 20).notNullable();
    table.string('Country', 100).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Addresses');
};
