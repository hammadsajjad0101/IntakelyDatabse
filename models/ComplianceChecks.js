"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ComplianceChecks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ComplianceChecks.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      ComplianceChecks.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      ComplianceChecks.belongsTo(models.Leads, {
        foreignKey: "LeadID",
        as: "lead",
      });

      ComplianceChecks.belongsTo(models.ComplianceTypes, {
        foreignKey: "ComplianceTypeID",
        as: "compliance_type",
      });

      ComplianceChecks.belongsTo(models.StaffUsers, {
        foreignKey: "PerformedByStaffID",
        as: "perform_by_staff",
      });
    }
  }
  ComplianceChecks.init(
    {
      ComplianceCheckID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ClientID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      LeadID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ComplianceTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      PerformedByStaffID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DatePerformed: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      Status: {
        type: DataTypes.ENUM("Passed", "Failed", "Pending"),
      },
      Findings: {
        type: DataTypes.TEXT,
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
      modelName: "ComplianceChecks",
      tableName: "ComplianceChecks",
    }
  );
  return ComplianceChecks;
};
