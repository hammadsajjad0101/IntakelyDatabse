"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoices extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Invoices.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Invoices.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      Invoices.hasMany(models.Payments, {
        foreignKey: "InvoiceID",
        as: "invoice_id",
      });
    }
  }
  Invoices.init(
    {
      InvoiceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ClientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      InvoiceDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      DueDate: {
        type: DataTypes.DATEONLY,
      },
      TotalAmount: {
        type: DataTypes.DECIMAL(18, 2),
      },
      Status: {
        type: DataTypes.ENUM("Unpaid", "Paid", "Overdue"),
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
      modelName: "Invoices",
      tableName: "Invoices",
    }
  );
  return Invoices;
};
