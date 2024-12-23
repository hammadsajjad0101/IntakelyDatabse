const {Model,DataTypes}=require('sequelize');

class Cases extends Model{
    static associate(models) {
        // Many-to-One Relationships
        Cases.belongsTo(models.LawFirms, {
          foreignKey: 'LawFirmID',
          as: 'LawFirm',
          
        });
        Cases.belongsTo(models.Clients, {
          foreignKey: 'ClientID',
          as: 'Client',
          
        });
        Cases.belongsTo(models.MatterTypes, {
          foreignKey: 'MatterTypeID',
          as: 'MatterType',
          
        });
        Cases.belongsTo(models.MatterStatuses, {
          foreignKey: 'MatterStatusID',
          as: 'MatterStatus',
        });
  
        // One-to-Many Relationships
        Cases.hasMany(models.TimeCards, {
          foreignKey: 'CaseID',
          as: 'TimeCards',
        });
        Cases.hasMany(models.StaffCaseAssignments, {
          foreignKey: 'CaseID',
          as: 'StaffAssignments',
        });
        Cases.hasMany(models.CaseContacts, {
          foreignKey: 'CaseID',
          as: 'CaseContacts',
        });
        Cases.hasMany(models.Documents, {
          foreignKey: 'CaseID',
          as: 'Documents',
        });
        Cases.hasMany(models.Tasks, {
          foreignKey: 'RelatedCaseID',
          as: 'Tasks',
        });
      }
}
Cases.init(
    {
        CaseID: {
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
            allowNull: false,
          },
          CaseNumber: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          CaseName: {
            type: DataTypes.STRING(255),
            allowNull: false,
          },
          MatterTypeID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          MatterStatusID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          OpenDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          CloseDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
          },
          Description: {
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
    },{
        sequelize,
        modelName:'Cases',
        tableName:'Cases',
        timestamps:false,
    }
)
module.exports=Cases;