/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('SensitiveInformation',(table)=>{
    table.increments('SensitiveInfoID').primary();
    table.integer('ClientID').unsigned().notNullable().references('ClientID').inTable('Clients').onDelete('CASCADE');
    table.string('DataType', 100).notNullable(); 
    table.binary('EncryptedData').notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now()).onUpdate(knex.fn.now());
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('SensitiveInformation');
};
