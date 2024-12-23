/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Leads',(table)=>{
    table.increments('LeadID').primary();
    table.integer('LawFirmID').unsigned().notNullable().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
    table.string('FirstName',100).notNullable();
    table.string('LastName',100).notNullable();
    table.string('Email',255).notNullable();
    table.string('PhoneNumber',20).notNullable();
    table.enum('LeadType',['ProspectiveClient', 'Referral', 'Corporate', 'Individual']).notNullable();
    table.integer('LeadStatusID').unsigned().notNullable().references('LeadStatusID').inTable('LeadStatuses').onDelete('CASCADE');
    table.integer('AssignedStaffID').unsigned().notNullable().references('AssignedStaffID').inTable('StaffUsers').onDelete('CASCADE');
    table.integer('LeadScore').nullable();
    table.integer('LeadSourceCompaignID').unsigned().notNullable().references('LeadSourceCompaignID').inTable('MarketingCampaigns').onDelete('CASCADE');
    table.text('ContactInformation');
    table.timestamp('DateCreated').defaultTo(knex.fn.now());
    table.text('Notes');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Leads')
};
