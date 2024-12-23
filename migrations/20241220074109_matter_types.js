/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('MatterTypes',(table)=>{
    table.increments('MatterTypeID').primary(); 
    table.string('TypeName', 100).notNullable();
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
  return knex.schema.dropTable('MatterTypes');
};
