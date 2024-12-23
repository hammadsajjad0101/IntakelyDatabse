"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PriorityLevels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PriorityLevels.hasMany(models.Tasks, {
        foreignKey: "PriorityLevelID",
        as: "priority_level",
      });

      PriorityLevels.hasMany(models.Subtasks, {
        foreignKey: "PriorityLevelID",
        as: "priority_level",
      });
    }
  }
  PriorityLevels.init(
    {
      PriorityLevelID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LevelName: {
        type: DataTypes.STRING(100),
      },
      Description: {
        type: DataTypes.TEXT,
      },
      Created_at: {
        type: DataTypes.DATE,
      },
      Modified_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "PriorityLevels",
      tableName: "PriorityLevels",
    }
  );
  return PriorityLevels;
};
