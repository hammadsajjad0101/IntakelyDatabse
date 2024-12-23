"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class IntegrationTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      IntegrationTypes.hasMany(models.Integrations, {
        foreignKey: "IntegrationTypeID",
        as: "integrations",
      });
    }
  }
  IntegrationTypes.init(
    {
      IntegrationTypeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TypeName: { type: DataTypes.STRING(100), allowNull: false },
      Description: DataTypes.TEXT,
      APIEndpoint: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DocumentationURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "IntegrationTypes",
      tableName: "IntegrationTypes",
    }
  );
  return IntegrationTypes;
};
