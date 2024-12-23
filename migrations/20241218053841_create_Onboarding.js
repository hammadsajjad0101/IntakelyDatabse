
exports.up = function(knex) {
  return knex.schema.createTable('Onboarding',(table)=>{
    table.increments('OnboardingID').primary();
    table.integer('LawFirmID').unsigned().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
    table.enum('Status',['InProgress','Completed','Pending']).notNullable();
    table.date('StartDate').notNullable();
    table.date('EndDate').nullable();
    table.text('Notes').nullable();
    table.timestamp('CratedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Onboarding');
};
