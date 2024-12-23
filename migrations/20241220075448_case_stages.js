/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('CaseStages',(table)=>{
    table.increments('CaseStageID').primary();
    table.integer('CaseID').unsigned().notNullable().references('CaseID').inTable('Cases').onDelete('CASCADE');
    table.string('StageName', 100).notNullable();
    table.timestamp('EntryDateTime').notNullable();
    table.timestamp('ExitDateTime').nullable();
    table.text('Notes').nullable();
    table.timestamp('Created_at').defaultTo(knex.fn.now());
    table.timestamp('Modified_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('CaseStages');
};
