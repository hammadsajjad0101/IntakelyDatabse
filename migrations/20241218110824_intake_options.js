/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('IntakeOptions', (table) => {
    table.increments('OptionID').primary(); 
    table.integer('QuestionID').unsigned().references('QuestionID').inTable('IntakeQuestions').onDelete('CASCADE'); 
    table.string('OptionText', 255).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('IntakeOptions');
};
