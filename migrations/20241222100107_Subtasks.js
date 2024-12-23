/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Subtasks", function (table) {
    table.increments("SubtaskID").primary();
    table
      .integer("TaskID")
      .notNullable()
      .references("TaskID")
      .inTable("Tasks")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.string("Title", 100);
    table.text("Description");
    table
      .integer("StatusID")
      .notNullable()
      .references("StatusID")
      .inTable("TaskStatuses")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("AssignedToStaffID")
      .notNullable()
      .references("StaffID")
      .inTable("StaffUsers")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("DueDate");
    table.timestamp("CreatedDateTime");
    table.text("Notes");
    table.timestamp("Created_at").defaultTo(knex.fn.now());
    table.timestamp("Modified_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("Subtasks");
};
