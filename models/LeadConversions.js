"use strict";
const { Model, BOOLEAN } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LeadConversions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      LeadConversions.belongsTo(models.Leads, {
        foreignKey: "LeadID",
        as: "lead_id",
      });

      LeadConversions.belongsTo(models.StaffUsers, {
        foreignKey: "AssignedStaffID",
        as: "assign_staff_id",
      });

      LeadConversions.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });
    }
  }
  LeadConversions.init(
    {
      ConversionID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LeadID: DataTypes.INTEGER,
      ConversionDate: DataTypes.DATEONLY,
      Method: DataTypes.STRING(100),
      AssignedStaffID: DataTypes.INTEGER,
      ClientID: DataTypes.INTEGER,
      Notes: DataTypes.TEXT,
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
      modelName: "LeadConversions",
      tableName: "LeadConversions",
    }
  );
  return LeadConversions;
};
