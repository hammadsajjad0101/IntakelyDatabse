"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Referrals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Referrals.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Referrals.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      Referrals.belongsTo(models.ReferrerTypes, {
        foreignKey: "ReferrerTypeID",
        as: "referrer_type",
      });
    }
  }
  Referrals.init(
    {
      ReferralID: {
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
      ReferrerName: {
        type: DataTypes.STRING,
      },
      ReferrerTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ReferrerDate: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
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
      modelName: "Referrals",
      tableName: "IntegrationTypes",
    }
  );
  return Referrals;
};
