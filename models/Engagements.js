"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Engagements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Engagements.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Engagements.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      Engagements.belongsTo(models.EngagementStatuses, {
        foreignKey: "EngagementStatusID",
        as: "engagement_status_id",
      });
    }
  }
  Engagements.init(
    {
      EngagementID: {
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
        allowNull: false,
      },
      EngagementDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      EngagementStatusID: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      modelName: "Engagements",
      tableName: "Engagements",
    }
  );
  return Engagements;
};
