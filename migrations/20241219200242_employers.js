/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Employers',(table)=>{
    table.increments('EmployerID').primary();
    table.integer('ClientID').unsigned().notNullable().references('ClientID').inTable('Clients').onDelete('CASCADE');
    table.string('CompanyName', 255).notNullable();
    table.string('Position', 255).notNullable();
    table.date('StartDate').notNullable();
    table.date('EndDate').nullable();
    table.text('Notes').nullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('Employers');
};
