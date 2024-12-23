/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('LeadStatuses',(table)=>{
    table.increments('LeadStatusID').primary();
    table.string('StatusName',100).notNullable();
    table.text('Description').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('LeadStatuses');
  
};
