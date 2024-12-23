/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('IntakeInformation',(table)=>{
    table.increments('IntakeID').primary();
    table.integer('LeadID').unsigned().notNullable().references('LeadID').inTable('Leads').onDelete('Set Null');
    table.integer('ClientID').unsigned().notNullable().references('ClientID').inTable('Clients').onDelete('Set Null');
    table.timestamp('StartDateTime').notNullable();
    table.timestamp('EndDateTime').notNullable();
    table.text('Notes').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('IntakeInformation');
};
