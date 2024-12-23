"use strict";
const { model } = require("mongoose");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskStatuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TaskStatuses.hasMany(models.Tasks, {
        foreignKey: "StatusID",
        as: "task_status",
      });

      TaskStatuses.hasMany(models.Subtasks, {
        foreignKey: "StatusID",
        as: "subtask_status",
      });
    }
  }
  TaskStatuses.init(
    {
      StatusID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      StatusName: {
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
      modelName: "TaskStatuses",
      tableName: "TaskStatuses",
    }
  );
  return TaskStatuses;
};
