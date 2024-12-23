/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('CompanyTypes',(table)=>{
    table.increments('CompanyStatusID').primary();
    table.string('StatusName', 100).notNullable();
    table.text('Description');
    table.timestamp('createdAt').defaultTo(knex.fn.now()); 
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('CompanyStatuses');
};
