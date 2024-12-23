/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('StaffCaseAssignments',(table)=>{
    table.increments('AssignmentID').primary();
    table.integer('StaffID').unsigned().notNullable().references('StaffID').inTable('StaffUsers').onDelete('CASCADE'); 
    table.integer('CaseID').unsigned().notNullable().references('CaseID').inTable('Cases').onDelete('CASCADE');
    table.string('RoleInCase', 100).notNullable(); 
    table.date('AssignmentDate').notNullable(); 
    table.text('Notes').nullable();
    table.timestamp('Created_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('StaffCaseAssignments');
};
