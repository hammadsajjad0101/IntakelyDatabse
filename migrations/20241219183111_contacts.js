/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('Contacts',(table)=>{
table.increments('ContactID').primary();
table.integer('ContactTypeID').unsigned().notNullable().references('contactTypeId').inTable('contactTypes').onDelete('CASCADE');
table.integer('CompanyID').unsigned().nullable().references('companyId').inTable('companies').onDelete('CASCADE');
table.string('FirstName',100).notNullable();
table.string('LastName', 100).notNullable();
table.string('Email', 255).nullable();
table.string('PhoneNumber', 20).nullable();
table.text('Notes').nullable();
table.timestamp('createdAt').defaultTo(knex.fn.now());
table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('Contacts');
};
