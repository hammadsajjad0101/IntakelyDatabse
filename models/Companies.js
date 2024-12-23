const { Model, DataTypes } = require('sequelize');

class Companies extends Model {
  static associate(models) {
    // Many-to-One relationship with CompanyStatuses
    this.belongsTo(models.CompanyStatuses, {
      foreignKey: 'CompanyStatusID',
      as: 'CompanyStatus',
    });

    // One-to-One relationship with Addresses
    this.belongsTo(models.Addresses, {
      foreignKey: 'AddressID',
      as: 'Address',
    });
  }
}

Companies.init(
  {
    CompanyID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CompanyStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Notes: {
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
    modelName: 'Companies',
    tableName: 'Companies',
    timestamps: true, 
  }
);

module.exports = Companies;
