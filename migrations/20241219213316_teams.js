/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Teams',(table)=>{
    table.increments('TeamID').primary();
    table.integer('LawFirmID').unsigned().notNullable().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
    table.string('TeamName', 100).notNullable();
    table.text('Description').nullable();
    table.timestamp('Created_at').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('modified_at').defaultTo(knex.fn.now()).notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Teams');
};
