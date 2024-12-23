const { Model, DataTypes } = require('sequelize');

  class CaseContacts extends Model {
    static associate(models) {
      // Many-to-One relationship with Cases
      CaseContacts.belongsTo(models.Cases, {
        foreignKey: 'CaseID',
        as: 'Cases',
      });

      // Many-to-One relationship with Contacts
      CaseContacts.belongsTo(models.Contacts, {
        foreignKey: 'ContactID',
        as: 'Contacts',
      });
    }
  }

  CaseContacts.init(
    {
      CaseContactID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      CaseID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ContactID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      RoleInCase: {
        type: DataTypes.STRING(100),
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
      modelName: 'CaseContacts',
      tableName: 'CaseContacts',
      timestamps: false, 
    }
  );

module.exports=CaseContacts
