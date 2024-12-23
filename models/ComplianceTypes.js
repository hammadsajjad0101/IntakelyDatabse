"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ComplianceTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComplianceTypes.hasMany(models.ComplianceChecks, {
        foreignKey: "ComplianceTypeID",
        as: "compliance_type",
      });
    }
  }
  ComplianceTypes.init(
    {
      ComplianceTypeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TypeName: {
        type: DataTypes.STRING(100),
      },
      Description: {
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
      modelName: "ComplianceTypes",
      tableName: "ComplianceTypes",
    }
  );
  return ComplianceTypes;
};
