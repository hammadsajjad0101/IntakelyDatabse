
exports.up = function(knex) {
  return knex.schema.createTable('Specialties',(table)=>{
    table.increments('SpecialtyID').primary();
    table.integer('PracticeAreaID').unsigned().notNullable().references('PracticeAreaID').inTable('PracticeAreas').onDelete('CASCADE');
    table.string('Name',100).notNullable();
    table.text('Description');
    table.timestamp('CreatedAt').defaultTo(knex.fn.now());
    table.timestamp('UpdatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('Specialties');
};
