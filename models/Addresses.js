const { Model, DataTypes } = require('sequelize');

class Addresses extends Model {
  static associate(models) {
    // One-to-One relationship with LawFirms
    this.hasOne(models.LawFirms, {
      foreignKey: 'AddressID',
      as: 'LawFirmAddress',
    });

    // One-to-One relationship with Companies
    this.hasOne(models.Companies, {
      foreignKey: 'AddressID',
      as: 'CompanyAddress',
    });

    // One-to-Many relationship with Contacts
    this.hasMany(models.Contacts, {
      foreignKey: 'AddressID',
      as: 'ContactAddresses',
    });
  }
}

Addresses.init(
  {
    AddressID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    StreetAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    State: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    PostalCode: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    Country: {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    modelName: 'Addresses',
    tableName: 'Addresses',
    timestamps: true,
  }
);

module.exports = Addresses;
