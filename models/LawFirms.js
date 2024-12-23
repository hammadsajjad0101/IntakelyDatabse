const { Model, DataTypes } = require('sequelize');

class LawFirms extends Model {
  static associate(models) {
    // One-to-Many relationship with StaffUsers
    this.hasMany(models.StaffUsers, {
      foreignKey: 'LawFirmID',
      as: 'StaffUsers',
    });

    // One-to-Many relationship with Leads
    this.hasMany(models.Leads, {
      foreignKey: 'LawFirmID',
      as: 'Leads',
    });

    // One-to-Many relationship with Clients
    this.hasMany(models.Clients, {
      foreignKey: 'LawFirmID',
      as: 'Clients',
    });

    // One-to-Many relationship with MarketingCampaigns
    this.hasMany(models.MarketingCampaigns, {
      foreignKey: 'LawFirmID',
      as: 'MarketingCampaigns',
    });

    // One-to-Many relationship with Integrations
    this.hasMany(models.Integrations, {
      foreignKey: 'LawFirmID',
      as: 'Integrations',
    });

    // One-to-One relationship with Addresses
    this.belongsTo(models.Addresses, {
      foreignKey: 'AddressID',
      as: 'Address',
    });
  }
}

LawFirms.init(
  {
    LawFirmID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    LawFirmName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    AddressID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Website: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    Logo: {
      type: DataTypes.BLOB,
      allowNull: true,
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    ModifiedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'LawFirms',
    tableName: 'LawFirms',
    timestamps: false,
    createdAt: 'CreatedAt',
    updatedAt: 'ModifiedAt',
  }
);

module.exports = LawFirms;

