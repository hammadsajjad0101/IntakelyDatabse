"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskDependencies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TaskDependencies.belongsTo(models.Tasks, {
        foreignKey: "TaskID",
        as: "task",
      });

      TaskDependencies.belongsTo(models.Tasks, {
        foreignKey: "DependsOnTaskID",
        as: "task",
      });
    }
  }
  TaskDependencies.init(
    {
      DependencyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TaskID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DependsOnTaskID: {
        type: DataTypes.INTEGER,
      },
      Created_at: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "TaskDependencies",
      tableName: "TaskDependencies",
    }
  );
  return TaskDependencies;
};
