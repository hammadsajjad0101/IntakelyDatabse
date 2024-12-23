const { Model, DataTypes } = require('sequelize');

class Onboarding extends Model {
  static associate(models) {
    // Many-to-One relationship with LawFirms
    this.belongsTo(models.LawFirms, {
      foreignKey: 'LawFirmID',
      as: 'LawFirm',
    });
  }
}

Onboarding.init(
  {
    OnboardingID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Status: {
      type: DataTypes.ENUM('InProgress', 'Completed', 'Pending'),
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true, 
    },
    CreatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Onboarding',
    tableName: 'Onboarding',
    timestamps: false, 
    createdAt: 'CreatedAt',
  }
);

module.exports = Onboarding;
