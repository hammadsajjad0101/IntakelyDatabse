const { Knex } = require("knex");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('Documents', (table) => {
        table.increments('DocumentID').primary(); 
        table.integer('LawFirmID').unsigned().notNullable().references('LawFirmID').inTable('LawFirms').onDelete('CASCADE');
        table.integer('ClientID').unsigned().nullable().references('ClientID').inTable('Clients').onDelete('CASCADE');
        table.integer('LeadID').unsigned().nullable().references('LeadID').inTable('Leads').onDelete('CASCADE');
        table.integer('DocumentTypeID').unsigned().notNullable().references('DocumentTypeID').inTable('DocumentTypes').onDelete('CASCADE');
        table.string('DocumentName', 255).notNullable(); 
        table.string('StorageLink', 255).notNullable(); 
        table.timestamp('UploadDateTime').notNullable();
        table.enu('AccessPermissions', ['Client', 'Staff', 'Both']).notNullable(); 
        table.enu('Status', ['Draft', 'Sent', 'Viewed', 'Signed', 'Received']).notNullable(); 
        table.text('Notes').nullable(); 
        table.timestamp('Created_at').defaultTo(knex.fn.now()); 
        table.timestamp('Modified_at').defaultTo(knex.fn.now()); 
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Documents')
};
