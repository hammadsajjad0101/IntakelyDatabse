/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ClientPipeline',(table)=>{
    table.increments('ClientPipelineID').primary();
    table.integer('CientID').unsigned().notNullable().references('ClientID').inTable('Clients').onDelete('CASCADE');
    table.integer('StageID').notNullable().references('StageID').inTable('ClientPipelineStages').onDelete('CASCADE');
table.datetime('EntryDateTime').notNullable();
table.datetime('ExitDateTime').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ClientPipeline');
};
