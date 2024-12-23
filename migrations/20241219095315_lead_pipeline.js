/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('LeadPipeline',(table)=>{
    table.increments('PipelineID').primary();
    table.integer('LeadID').unsigned().notNullable().references('LeadID').inTable('Leads').onDelete('CASCADE');
    table.integer('StageID').unsigned().notNullable().references('StageID').inTable('LeadPipelineStages').onDelete('CASCADE');
    table.timestamp('EntryDateTime').notNullable();
    table.timestamp('ExitDateTime').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('LeadPipeline');
};
