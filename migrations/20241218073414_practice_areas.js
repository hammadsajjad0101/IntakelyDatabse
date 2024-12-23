/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('PracticeAreas',(table)=>{
        table.increments('PracticeAreaID').primary();
        table.string('Name').notNullable();
        table.text('Description').nullable();

    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('PracticeAreas');
};
