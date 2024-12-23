/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('EmploymentTypes',(table)=>{
    table.increments('EmploymentTypeID').primary(); 
    table.string('TypeName', 100).notNullable(); 
    table.text('Description').nullable(); 
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('EmploymentTypes');
};
