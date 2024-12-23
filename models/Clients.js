const { Model, DataTypes } = require('sequelize');

class Clients extends Model {
  static associate(models) {
    // Many-to-One relationship with LawFirms 
    this.belongsTo(models.LawFirms, {
      foreignKey: 'LawFirmID',
      as: 'LawFirm',
    });

    // One-to-One relationship with Leads 
    this.belongsTo(models.Leads, {
      foreignKey: 'LeadID',
      as: 'Lead',
    });

    // Many-to-One relationship with StaffUsers 
    this.belongsTo(models.StaffUsers, {
      foreignKey: 'AssignedStaffID',
      as: 'AssignedStaff',
    });

    // One-to-Many relationship with Documents
    this.hasMany(models.Documents, {
      foreignKey: 'ClientID',
      as: 'Documents',
    });

    // One-to-Many relationship with Invoices 
    this.hasMany(models.Invoices, {
      foreignKey: 'ClientID',
      as: 'Invoices',
    });

    // One-to-Many relationship with Appointments
    this.hasMany(models.Appointments, {
      foreignKey: 'ClientID',
      as: 'Appointments',
    });

    // One-to-Many relationship with Interactions
    this.hasMany(models.Interactions, {
      foreignKey: 'ClientID',
      as: 'Interactions',
    });
  }
}

Clients.init(
  {
    ClientID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    LeadID: {
      type: DataTypes.INTEGER,
      allowNull: true, 
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    AssignedStaffID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    EngagementStatus: {
      type: DataTypes.ENUM('Pending', 'Signed', 'Rejected'),
      allowNull: false,
    },
    EngagementDate: {
      type: DataTypes.DATE,
      allowNull: true, 
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Created_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Modified_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Clients',
    tableName: 'Clients',
    timestamps: false,
  }
);

module.exports = Clients;
