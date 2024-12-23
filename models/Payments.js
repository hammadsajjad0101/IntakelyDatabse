"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payments.belongsTo(models.Invoices, {
        foreignKey: "InvoiceID",
        as: "invoice",
      });
    }
  }
  Payments.init(
    {
      PaymentID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      InvoiceID: {
        type: DataTypes.INTERGER,
        allowNull: false,
      },
      PaymentDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      Amount: {
        type: DataTypes.DECIMAL(18, 2),
      },
      PaymentMethod: {
        type: DataTypes.ENUM("CreditCard", "BankTransfer", "PayPal"),
      },
      TransactionID: {
        type: DataTypes.STRING(100),
      },
      Status: {
        type: DataTypes.ENUM("Completed", "Failed", "Pending"),
      },
      CreatedDateTime: {
        type: DataTypes.DATE,
      },
      Notes: {
        type: DataTypes.TEXT,
      },
      Created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      Modified_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Payments",
      tableName: "Payments",
    }
  );
  return Payments;
};
