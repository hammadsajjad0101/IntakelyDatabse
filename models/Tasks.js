"use strict";
const { model } = require("mongoose");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tasks.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Tasks.belongsTo(models.TaskStatuses, {
        foreignKey: "StatusID",
        as: "task_status",
      });

      Tasks.belongsTo(models.StaffUsers, {
        foreignKey: "AssignedToStaffID",
        as: "staff_id",
      });

      Tasks.belongsTo(models.Clients, {
        foreignKey: "RelatedClientID",
        as: "client_id",
      });

      Tasks.belongsTo(models.Leads, {
        foreignKey: "RelatedLeadID",
        as: "law_firm",
      });

      Tasks.belongsTo(models.PriorityLevels, {
        foreignKey: "PriorityLevelID",
        as: "priority_level",
      });
    }
  }
  Tasks.init(
    {
      TaskID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
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
      RelatedClientID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RelatedLeadID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      PriorityLevelID: {
        type: DataTypes.INTEGER,
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
      modelName: "Tasks",
      tableName: "Tasks",
    }
  );
  return Tasks;
};
