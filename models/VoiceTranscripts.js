"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VoiceTranscripts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Many-to-One with LawFirms
      VoiceTranscripts.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "lawFirm",
      });
      //    ParticipantID relates to Clients, Leads, or Contacts depending on ParticipantType ???
    }
  }
  VoiceTranscripts.init(
    {
      VoiceTranscriptID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false, //added
      },
      CallID: DataTypes.STRING(100),
      ParticipantID: DataTypes.INTEGER,
      ParticipantType: DataTypes.STRING(50),
      StartDateTime: DataTypes.DATE,
      EndDateTime: DataTypes.DATE,
      Transcript: DataTypes.TEXT,
      RecordingLink: DataTypes.STRING,
      Notes: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "VoiceTranscripts",
      tableName: "VoiceTranscripts",
    }
  );
  return VoiceTranscripts;
};
