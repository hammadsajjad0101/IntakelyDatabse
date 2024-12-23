/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Clients',(table)=>{
    table.increments('ClientID').primary();
    table.integer('LawFirmID').unsigned().notNullable().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
    table.integer('LeadID').unsigned().nullable().references('LeadID').inTable('Leads').onDelete('CASCADE');
    table.string('FirstName',100).notNullable();
    table.string('LastName',100).notNullable();
    table.string('Email',255).notNullable();
    table.string('PhoneNumber',20).notNullable();
    table.integer('AssignedStaffID').unsigned().notNullable().references('AssignedStaffID').inTable('StaffUsers').onDelete('CASCADE');
    table.enum('EngagementStatus',['Pending','Signed','Rejected']).notNullable();
    table.timestamp('EngagementDate').nullable();
    table.text('Notes').nullable;
    table.datetime('CreatedAt').nullable();
    table.datetime('ModifiedAt').nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
