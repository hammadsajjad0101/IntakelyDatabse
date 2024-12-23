/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('MatterStatuses',(table)=>{
    table.increments('MatterStatusID').primary();
    table.string('StatusName', 100).notNullable();
    table.text('Description').nullable();
    table.timestamp('Created_at').defaultTo(knex.fn.now());
    table.timestamp('Modified_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('MatterStatuses');
};
