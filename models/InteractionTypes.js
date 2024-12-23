"use strict";
const { model } = require("mongoose");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class InteractionTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      InteractionTypes.hasMany(model.Interactions, {
        foreignKey: "InteractionTypeID",
        as: "interaction_type",
      });
    }
  }
  InteractionTypes.init(
    {
      InteractionTypeID: {
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
      modelName: "InteractionTypes",
      tableName: "InteractionTypes",
    }
  );
  return InteractionTypes;
};
