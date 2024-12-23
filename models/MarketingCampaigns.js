"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MarketingCampaigns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MarketingCampaigns.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });
    }
  }
  MarketingCampaigns.init(
    {
      CampaignID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CampaignName: DataTypes.STRING,
      CampaignType: DataTypes.STRING(100),
      StartDate: DataTypes.DATEONLY,
      EndDate: DataTypes.DATEONLY,
      Budget: DataTypes.DECIMAL(18, 2),
      Notes: DataTypes.TEXT,
      Created_at: DataTypes.DATE,
      Modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "MarketingCampaigns",
      tableName: "MarketingCampaigns",
    }
  );
  return MarketingCampaigns;
};
