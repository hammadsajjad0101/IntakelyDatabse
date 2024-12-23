/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ContactTypes',(table)=>{
    table.increments('ContactTypeID').primary();
    table.string('TypeName', 100).notNullable();
    table.text('Description');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('ContactTypes');
};
