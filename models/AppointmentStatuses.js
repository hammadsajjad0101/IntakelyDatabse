"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AppointmentStatuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        AppointmentStatuses.hasMany(models.Appointments, {
            foreignKey: "AppointmentStatusID",
            as: "appointment_status",
        })
    }
  }
  AppointmentStatuses.init(
    {
      StatusID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      StatusName: {
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
      modelName: "AppointmentStatuses",
      tableName: "AppointmentStatuses",
    }
  );
  return AppointmentStatuses;
};
