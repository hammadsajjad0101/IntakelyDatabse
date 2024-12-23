"use strict";
const { model } = require("mongoose");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Interactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Interactions.belongsTo(model.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Interactions.belongsTo(model.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      Interactions.belongsTo(model.Leads, {
        foreignKey: "LeadID",
        as: "lead_id",
      });

      Interactions.belongsTo(model.InteractionTypes, {
        foreignKey: "InteractionTypeID",
        as: "interaction_type",
      });

      Interactions.belongsTo(model.StaffUsers, {
        foreignKey: "CreatedByStaffID",
        as: "staff_id",
      });
    }
  }
  Interactions.init(
    {
      InteractionID: {
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
      InteractionTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DateTime: {
        type: DataTypes.DATE,
      },
      Subject: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.TEXT,
      },
      CreatedByStaffID: {
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
      modelName: "Interactions",
      tableName: "Interactions",
    }
  );
  return Interactions;
};
