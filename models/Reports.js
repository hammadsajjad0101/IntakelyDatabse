"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reports extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      Reports.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });
    }
  }
  Reports.init(
    {
      ReportID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ReportName: DataTypes.STRING,
      ReportType: DataTypes.STRING(100),
      GeneratedDate: DataTypes.DATE,
      Parameters: DataTypes.TEXT,
      ReportData: DataTypes.BLOB,
      Created_at: DataTypes.DATE,
      Modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Reports",
      tableName: "Reports",
    }
  );
  return Reports;
};
