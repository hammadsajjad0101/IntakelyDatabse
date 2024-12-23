/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Departments',(table)=>{
    table.increments('DepartmentID').primary();
    table.string('DepartmentName', 100).notNullable();
    table.text('Description').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Departments');
};
