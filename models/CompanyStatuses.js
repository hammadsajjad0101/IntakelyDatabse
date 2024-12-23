const { Model, DataTypes } = require('sequelize');

class CompanyStatuses extends Model {
  static associate(models) {
    // One-to-Many relationship with Companies
    this.hasMany(models.Companies, {
      foreignKey: 'CompanyStatusID',
      as: 'Companies',
    });
  }
}

CompanyStatuses.init(
  {
    CompanyStatusID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StatusName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'CompanyStatuses',
    tableName: 'CompanyStatuses',
    timestamps: true,
  }
);

module.exports = CompanyStatuses;
