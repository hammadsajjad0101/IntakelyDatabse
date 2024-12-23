"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Workflows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      Workflows.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });

      // Many-to-One with StaffUsers
      CommunicationAlerts.belongsTo(models.StaffUsers, {
        foreignKey: "CreatedByStaffID",
        as: "staffID",
      });
    }
  }
  Workflows.init(
    {
      WorkflowID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      WorkflowName: DataTypes.STRING,
      TriggerEvent: DataTypes.STRING,
      Conditions: DataTypes.TEXT,
      Actions: DataTypes.TEXT,
      isActive: DataTypes.BOOLEAN,
      CreatedByStaffID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CreatedDateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Workflows",
      tableName: "Workflows",
    }
  );
  return Workflows;
};
