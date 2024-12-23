const { Model, DataTypes } = require('sequelize');

class Leads extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One with LawFirms
    this.belongsTo(models.LawFirms, {
      foreignKey: 'LawFirmID',
      as: 'LawFirm',
    });

    // Many-to-One with LeadStatuses
    this.belongsTo(models.LeadStatuses, {
      foreignKey: 'LeadStatusID',
      as: 'LeadStatus',
    });

    // Many-to-One with StaffUsers (AssignedStaffID)
    this.belongsTo(models.StaffUsers, {
      foreignKey: 'AssignedStaffID',
      as: 'AssignedStaff',
    });

    // Many-to-One with MarketingCampaigns
    this.belongsTo(models.MarketingCampaigns, {
      foreignKey: 'LeadSourceCampaignID',
      as: 'LeadSourceCampaign',
    });

    // One-to-Many with IntakeInformation
    this.hasMany(models.IntakeInformation, {
      foreignKey: 'LeadID',
      as: 'Intakes',
    });

    // One-to-Many with Documents
    this.hasMany(models.Documents, {
      foreignKey: 'LeadID',
      as: 'Documents',
    });

    // One-to-One with LeadConversions
    this.hasOne(models.LeadConversions, {
      foreignKey: 'LeadID',
      as: 'LeadConversion',
    });
  }
}

Leads.init(
  {
    LeadID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    LeadType: {
      type: DataTypes.ENUM('ProspectiveClient', 'Referral', 'Corporate', 'Individual'),
      allowNull: false,
    },
    LeadStatusID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AssignedStaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'StaffUsers',
        key: 'StaffID',
      },
      onDelete: 'CASCADE',
    },
    LeadScore: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    LeadSourceCampaignID: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ContactInformation: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    DateCreated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    Notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Leads',
    tableName: 'Leads',
    timestamps: true,
    createdAt: 'Created_at',
    updatedAt: 'Modified_at',
  }
);

module.exports = Leads;
