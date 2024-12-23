"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Emails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Emails.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "firmID",
      });
    //   Optionally linked to Leads or Clients (RelatedEntityID, EntityType)
    }
  }
  Emails.init(
    {
        EmailID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        LawFirmID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        FromAddress: DataTypes.STRING,
        ToAddress: DataTypes.STRING,
        Subject: DataTypes.STRING,
        Body: DataTypes.TEXT,
        SentDateTime: DataTypes.DATE,
        Status: DataTypes.ENUM("Sent", "Failed", "Pending"),
        RelatedEntityID: DataTypes.INTEGER,
        EntityType: DataTypes.STRING(50),
        Notes: DataTypes.TEXT,
        Created_at: DataTypes.DATE,
        Modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Emails",
      tableName: "Emails",
    }
  );
  return Emails;
};
