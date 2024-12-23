/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('IntakeResponses',(table)=>{
    table.increments('ResponseID').primary();
    table.integer('IntakeID').unsigned().notNullable().references('IntakeID').inTable('IntakeInformation').onUpdate('CASCADE').onDelete('CASCADE');
    table.integer('QuestionID').unsigned().notNullable().references('QuestionID').inTable('IntakeQuestions').onUpdate('CASCADE').onDelete('CASCADE');
    table.text('ResponseText').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('IntakeResponses'); 
};
