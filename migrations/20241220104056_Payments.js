/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Payments", function (table) {
    table.increments("PaymentID").primary();
    table
      .integer("InvoiceID")
      .notNullable()
      .references("InvoiceID")
      .inTable("Invoices")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamp("PaymentDateTime").defaultTo(knex.fn.now());
    table.decimal("Amount", 18, 2);
    table.enu("PaymentMethod", ["CreditCard", "BankTransfer", "PayPal"], {
      useNative: true,
      enumName: "payment_method",
    });
    table.string("TransactionID", 100);
    table.enu("Status", ["Completed", "Failed", "Pending"], {
      useNative: true,
      enumName: "payment_status",
    });
    table.timestamp("CreatedDateTime").defaultTo(knex.fn.now());
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
  return knex.schema.dropTable("Payments");
};
