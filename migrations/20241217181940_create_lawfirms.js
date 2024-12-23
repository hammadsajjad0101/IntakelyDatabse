/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('LawFirms',(table)=>{
    table.increments('LawFirmID').primary();
    table.string('LawFirmName',255).notNullable();
    table.integer('AddressID').unsigned().references('id').inTable('Addresses').onDelete('CASCADE');
    table.string('PhoneNumber',20).notNullable();
    table.string('Email',255).notNullable();
    table.string('Website',255).notNullable();
    table.binary('Logo').notNullable();
    table.timestamp('CreatedAt').defaultTo(knex.fn.now());
    table.timestamp('ModifiedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('LawFirms')
};
