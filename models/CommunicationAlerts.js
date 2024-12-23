"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CommunicationAlerts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      CommunicationAlerts.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "firmID",
      });

      CommunicationAlerts.belongsTo(models.StaffUsers, {
        foreignKey: "ResolvedByStaffID",
        as: "staffID",
      });
    }
  }
  CommunicationAlerts.init(
    {
      AlertID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AlertType: DataTypes.STRING(100),
      RelatedCommunicationID: DataTypes.INTEGER,
      CommunicationType: DataTypes.STRING(50),
      Description: DataTypes.TEXT,
      AlertDateTIme: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      Resolved: DataTypes.BOOLEAN,
      ResolvedByStaffID: DataTypes.INTEGER,
      ResolvedDateTime: DataTypes.DATE,
      Notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "CommunicationAlerts",
      tableName: "CommunicationAlerts",
    }
  );
  return CommunicationAlerts;
};
