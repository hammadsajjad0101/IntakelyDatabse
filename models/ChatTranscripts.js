"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ChatTranscripts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ChatTranscripts.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "firmID",
      });
    }
  }
  ChatTranscripts.init(
    {
      ChatID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false, // added
      },
      ParticipantID: DataTypes.INTEGER,
      ParticipantType: DataTypes.STRING(50),
      StartDateTime: DataTypes.DATE,
      EndDateTime: DataTypes.DATE,
      Transcript: DataTypes.TEXT,
      Notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "ChatTranscripts",
      tableName: "ChatTranscripts",
    }
  );
  return ChatTranscripts;
};
