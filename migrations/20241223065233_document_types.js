/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('DocumentTypes',(table)=>{
    table.increments('DocumentTypeID').primary();
    table.string('TypeName').notNullable();
    table.string('Description').nullable();
    table.timestamp('Created_at').defaultTo(knex.fn.now()); 
    table.timestamp('Modified_at').defaultTo(knex.fn.now()); 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('DocumentTypes');
};
