"use strict";
const { Model } = require("sequelize");
const AppointmentTypes = require("./AppointmentTypes");
module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointments.belongsTo(models.LawFirms, {
        foreignKey: "LawFirmID",
        as: "law_firm",
      });

      Appointments.belongsTo(models.Clients, {
        foreignKey: "ClientID",
        as: "client_id",
      });

      Appointments.belongsTo(models.Leads, {
        foreignKey: "LeadID",
        as: "lead_id",
      });

      Appointments.belongsTo(models.StaffUsers, {
        foreignKey: "StaffUserID",
        as: "staff_id",
      });

      Appointments.belongsTo(models.AppointmentTypes, {
        foreignKey: "AppointmentTypeID",
        as: "appointment_type",
      });

      Appointments.belongsTo(models.AppointmentStatuses, {
        foreignKey: "AppointmentStatusID",
        as: "appointment_status",
      });
    }
  }
  Appointments.init(
    {
      AppointmentID: {
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
      StaffUserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AppointmentTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      AppointmentStatusID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      StartDateTime: {
        type: DataTypes.DATE,
      },
      EndDateTime: {
        type: DataTypes.DATE,
      },
      Location: {
        type: DataTypes.STRING,
      },
      Subject: {
        type: DataTypes.STRING,
      },
      Description: {
        type: DataTypes.TEXT,
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
      modelName: "Appointments",
      tableName: "Appointments",
    }
  );
  return Appointments;
};
