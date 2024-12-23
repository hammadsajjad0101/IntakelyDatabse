"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientFinancialResponsibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClientFinancialResponsibility.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      ClientFinancialResponsibility.belongsTo(models.Contacts, {
        foreignKey: "ResponsiblePartyID",
        as: responsible_party,
      });
    }
  }
  ClientFinancialResponsibility.init(
    {
      ResponsibleID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ClientID: DataTypes.INTEGER,
      ResponsiblePartyID: DataTypes.INTEGER,
      Relationship: DataTypes.STRING(100),
      Notes: DataTypes.TEXT,
      Created_at: DataTypes.DATE,
      Modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ClientFinancialResponsibility",
      tableName: "ClientFinancialResponsibility",
    }
  );
  return ClientFinancialResponsibility;
};
