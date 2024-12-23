"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientFinancialInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ClientFinancialInfo.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });
    }
  }
  ClientFinancialInfo.init(
    {
      FinancialInfoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ClientID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FinancialDataType: {
        type: DataTypes.STRING(100),
      },
      EncryptedData: {
        type: DataTypes.BLOB,
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
      modelName: "ClientFinancialInfo",
      tableName: "ClientFinancialInfo",
    }
  );
  return ClientFinancialInfo;
};
