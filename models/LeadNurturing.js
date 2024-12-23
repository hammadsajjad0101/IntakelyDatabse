"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class LeadNurturing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      LeadNurturing.belongsTo(models.Leads, {
        foreignKey: "LeadID",
        as: "lead_id",
      });
    }
  }
  LeadNurturing.init(
    {
      NurturingID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LeadID: DataTypes.INTEGER,
      ActivityType: DataTypes.STRING(100),
      SchedueledDate: DataTypes.DATE,
      Status: DataTypes.ENUM("Pending", "Completed", "Skipped"),
      Notes: DataTypes.TEXT,
      Created_at: DataTypes.Date,
      Modified_at: DataTypes.Date,
    },
    {
      sequelize,
      modelName: "LeadNurturing",
      tableName: "LeadNurturing",
    }
  );
  return LeadNurturing;
};
