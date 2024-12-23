/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Cases',(table)=>{
    table.increments('CaseID').primary();
    table.integer('LawFirmID').unsigned().notNullable().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
    table.integer('ClientID').unsigned().notNullable().references('ClientID').inTable('Clients').onDelete('CASCADE');
    table.string('CaseNumber', 100).notNullable();
    table.string('CaseName', 255).notNullable();
    table.integer('MatterTypeID').unsigned().notNullable().references('MasterTypeID').inTable('MasterTypes').onDelete('CASCADE');
    table.integer('MatterStatusID').unsigned().notNullable().references('MatterStatusID').inTable('MatterStatuses').onDelete('CASCADE');
    table.date('OpenDate').notNullable();
    table.date('CloseDate').nullable();
    table.text('Description');
    table.timestamp('Created_at').defaultTo(knex.fn.now());
    table.timestamp('Modified_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Cases');
};
