"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subtasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Subtasks.belongsTo(models.Tasks, {
        foreignKey: "TaskID",
        as: "task",
      });

      Subtasks.belongsTo(models.TaskStatuses, {
        foreignKey: "StatusID",
        as: "task_status",
      });

      Subtasks.belongsTo(models.StaffUsers, {
        foreignKey: "AssignedToStaffID",
        as: "staff_id",
      });
    }
  }
  Subtasks.init(
    {
      SubtaskID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TaskID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Title: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.TEXT,
      },
      StatusID: {
        type: DataTypes.INTEGER,
      },
      AssignedToStaffID: {
        type: DataTypes.INTEGER,
      },
      DueDate: {
        type: DataTypes.DATE,
      },
      CreatedDateTime: {
        type: DataTypes.DATE,
      },
      Notes: {
        type: DataTypes.TEXT,
      },
      Created_at: {
        type: DataTypes.Date,
        defaultValue: DataTypes.NOW,
      },
      Modified_at: {
        type: DataTypes.Date,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Subtasks",
      tableName: "Subtasks",
    }
  );
  return Subtasks;
};
