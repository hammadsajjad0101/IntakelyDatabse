/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('TimeCards',(table)=>{
    table.increments('TimeCardID').primary();
    table.integer('StaffID').unsigned().notNullable().references('StaffID').inTable('StaffUsers').onDelete('CASCADE');
    table.integer('CaseID').unsigned().notNullable().references('CaseID').inTable('Cases').onDelete('CASCADE');
    table.date('Date').notNullable();
    table.time('StartTime').notNullable();
    table.time('EndTime').notNullable();
    table.decimal('Duration', 5, 2).notNullable(); 
    table.text('Description').nullable();
    table.boolean('Billable').defaultTo(true);
    table.timestamp('Created_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('TimeCards');
};
