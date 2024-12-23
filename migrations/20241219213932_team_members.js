/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('TeamMembers',(table)=>{
    table.increments('TeamMemberID').primary();
    table.integer('TeamID').unsigned().notNullable().references('TeamID').inTable('Teams').onDelete('CASCADE'); 
    table.integer('StaffID').unsigned().notNullable().references('StaffID').inTable('StaffUsers').onDelete('CASCADE'); 
    table.string('RoleInTeam', 100).nullable(); 
    table.timestamp('Created_at').defaultTo(knex.fn.now()).notNullable(); 
});
  }


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TeamMembers');
};
