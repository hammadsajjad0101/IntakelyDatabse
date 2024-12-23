"use strict";
const { Model, BOOLEAN } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SMSMessages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      SMSMessages.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });

      // Optionally linked to Leads or Clients (RelatedEntityID, EntityType) 
    }
  }
  SMSMessages.init(
    {
     SMSID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
     },
     LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
     },
     FromNumber: DataTypes.STRING(20),
     ToNumber: DataTypes.STRING(20),
     MessageBody: DataTypes.TEXT,
     SentDateTIme: DataTypes.DATE,
     Status: DataTypes.ENUM("Sent", "Failed", "Pending"),
     RelatedEntityID: DataTypes.INTEGER,
     EntityType: DataTypes.STRING(50),
     Notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "SMSMessages",
      tableName: "SMSMessages",
    }
  );
  return SMSMessages;
};
