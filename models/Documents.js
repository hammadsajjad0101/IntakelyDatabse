const { Model, DataTypes } = require('sequelize');
  class Documents extends Model {
    static associate(models) {
      // Many-to-One relationship with LawFirms
      Documents.belongsTo(models.LawFirms, {
        foreignKey: 'LawFirmID',
        as: 'LawFirms',
      });

      // Many-to-One relationship with Clients
      Documents.belongsTo(models.Clients, {
        foreignKey: 'ClientID',
        as: 'Clients',
      });

      // Many-to-One relationship with Leads
      Documents.belongsTo(models.Leads, {
        foreignKey: 'LeadID',
        as: 'Leads',
      });

      // Many-to-One relationship with DocumentTypes
      Documents.belongsTo(models.DocumentTypes, {
        foreignKey: 'DocumentTypeID',
        as: 'DocumentTypes',
      });
    }
  }

  Documents.init(
    {
      DocumentID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
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
      DocumentTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DocumentName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      StorageLink: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      UploadDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      AccessPermissions: {
        type: DataTypes.ENUM('Client', 'Staff', 'Both'),
        allowNull: false,
      },
      Status: {
        type: DataTypes.ENUM('Draft', 'Sent', 'Viewed', 'Signed', 'Received'),
        allowNull: false,
      },
      Notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      Modified_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW, 
      },
    },
    {
      sequelize,
      modelName: 'Documents',
      tableName: 'Documents',
      timestamps: false,
    }
  );
module.exports=Documents;