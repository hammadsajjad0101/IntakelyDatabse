"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SocialMediaProfiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      SocialMediaProfiles.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      SocialMediaProfiles.belongsTo(models.StaffUsers, {
        foreignKey: "StaffID",
        as: "staff_id",
      });
    }
  }
  SocialMediaProfiles.init(
    {
      ProfileID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ClientID: DataTypes.INTEGER,
      StaffID: DataTypes.INTEGER,
      Platform: DataTypes.STRING(100),
      ProfileURL: DataTypes.STRING,
      Username: DataTypes.STRING(100),
      Bio: DataTypes.TEXT,
      Notes: DataTypes.TEXT,
      Created_at: DataTypes.DATE,
      Modified_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "SocialMediaProfiles",
      tableName: "SocialMediaProfiles",
    }
  );
  return SocialMediaProfiles;
};
