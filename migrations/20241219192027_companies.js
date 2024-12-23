/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Companies',(table)=>{
    table.increments('CompanyID').primary();
    table.string('CompanyName', 255).notNullable(); 
    table.integer('CompanyStatusID').unsigned().notNullable().references('CompanyStatusID').inTable('CompanyStatuses').onDelete('CASCADE');
    table.integer('AddressID').unsigned().notNullable().references('AddressID').inTable('Addresses').onDelete('CASCADE');
    table.string('Website', 255);
    table.text('Notes');
    table.timestamp('createdAt').defaultTo(knex.fn.now()); 
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Companies');
};
