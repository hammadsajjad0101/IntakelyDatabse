"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tags.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Tags.belongsToMany(models.Clients, {
        through: models.ClientTags,
        foreignKey: "ClientID",
        otherKey: "TagID",
        as: "client_tag",
      });

      Tags.belongsToMany(models.Tasks, {
        through: models.TaskTags,
        foreignKey: "TaskID",
        otherKey: "TagID",
        as: "task_tag",
      });
    }
  }
  Tags.init(
    {
      TagID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      LawFirmID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      TagName: {
        type: DataTypes.STRING(100),
        allowNull: false,
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
      modelName: "Tags",
      tableName: "Tags",
    }
  );
  return Tags;
};
