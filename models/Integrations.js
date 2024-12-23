"use strict";
const { Model, BOOLEAN } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Integrations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      Integrations.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });

      // Many-to-One with IntegrationTypes
      Integrations.belongsTo(models.IntegrationTypes, {
        foreignKey: "IntegrationTypeID",
        as: "integrationType",
      });
    }
  }
  Integrations.init(
    {
      IntegrationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IntegrationTypeID: DataTypes.INTEGER,
      APIKey: DataTypes.STRING,
      APISecret: DataTypes.STRING,
      AccessToken: DataTypes.STRING,
      RefreshToken: DataTypes.STRING,
      SettingsJSON: DataTypes.TEXT,
      IsActive: DataTypes.BOOLEAN,
      CreatedDateTime: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    {
      sequelize,
      modelName: "Integrations",
      tableName: "Integrations",
    }
  );
  return Integrations;
};
