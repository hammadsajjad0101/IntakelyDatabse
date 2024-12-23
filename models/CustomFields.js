"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CustomFields extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      CustomFields.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });
    }
  }
  CustomFields.init(
    {
      CustomFieldID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      EntityType: {
        type: DataTypes.STRING(100),
      },
      EntityID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FieldName: {
        type: DataTypes.STRING,
      },
      FieldValue: {
        type: DataTypes.TEXT,
      },
      DataType: {
        type: DataTypes.STRING(50),
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
      modelName: "CustomFields",
      tableName: "CustomFields",
    }
  );
  return CustomFields;
};
