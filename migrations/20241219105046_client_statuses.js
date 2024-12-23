/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ClientStatuses',(table)=>{
    table.increments('ClientStatusID').primary();
    table.string('StatusName',100).notNullable();
    table.text('Description').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ClientStatuses');
};
