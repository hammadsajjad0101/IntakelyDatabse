/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('StaffUsers',(table)=>{
    table.increments('StaffID').primary();
    table.string('FirstName', 100).notNullable();
    table.string('LastName', 100).notNullable();
    table.string('Email', 255).nullable();
    table.string('PhoneNumber', 20).nullable();
    table.integer('RoleID').unsigned().notNullable().references('RoleID').inTable('StaffRoles').onDelete('CASCADE'); 
    table.integer('DepartmentID').unsigned().notNullable().references('DepartmentID').inTable('Departments').onDelete('CASCADE'); 
    table.string('AI_AgentName', 100).nullable(); 
    table.string('AI_AgentID', 100).nullable(); 
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('StaffUsers');
};
