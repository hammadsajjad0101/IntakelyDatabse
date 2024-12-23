/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('CaseContacts',(table)=>{
    table.increments('CaseContactID').primary(); 
    table.integer('CaseID').unsigned().notNullable().references('CaseID').inTable('Cases').onDelete('CASCADE');
    table.integer('ContactID').unsigned().notNullable().references('ContactID').inTable('Contacts').onDelete('CASCADE');
    table.string('RoleInCase', 100).notNullable();
    table.text('Notes');
    table.timestamp('Created_at').defaultTo(knex.fn.now());
    table.timestamp('Modified_at').defaultTo(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('CaseContacts');
};
