/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('IntakeQuestions',(table)=>{
    table.increments('QuestionID').primary();
    table.integer('PracticeAreaID').unsigned().notNullable().references('PracticeAreaID').inTable('PracticeAreas').onDelete('CASCADE');
    table.text('QuestionText').notNullable();
    table.enum('QuestionType',['Text','MultipleChoice','Boolean','Date']).notNullable();
    table.boolean('isRequired').defaultTo(false);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('IntakeQuestions');
};
