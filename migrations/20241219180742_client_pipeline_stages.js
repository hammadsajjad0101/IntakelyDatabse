/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('ClientPipelineStages',(table)=>{
    table.increments('StageID').primary();
    table.string('StageName',100).notNullable();
    table.text('Description').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('ClientPipelineStages');
};
