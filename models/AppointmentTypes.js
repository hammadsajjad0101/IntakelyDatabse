"use strict";
const { model } = require("mongoose");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppointmentTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      AppointmentTypes.hasMany(model.Appointments, {
        foreignKey: "AppointmentTypeID",
        as: "appointment_type",
      });
    }
  }
  AppointmentTypes.init(
    {
      AppointmentTypeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      TypeName: {
        type: DataTypes.STRING(100),
      },
      Description: {
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
      modelName: "AppointmentTypes",
      tableName: "AppointmentTypes",
    }
  );
  return AppointmentTypes;
};
