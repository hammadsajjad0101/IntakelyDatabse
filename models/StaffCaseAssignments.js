const{Model,DataTypes}=require('sequelize');

class StaffCaseAssignments extends Model{
    static associate(models) {
    
        StaffCaseAssignments.belongsTo(models.StaffUsers, {
          foreignKey: 'StaffID',
          as: 'StaffMember', 
          onDelete: 'CASCADE',
        });
        StaffCaseAssignments.belongsTo(models.Cases, {
          foreignKey: 'CaseID',
          as: 'CaseDetails', 
        });
      }
}
StaffCaseAssignments.init(
    {
        AssignmentID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
        StaffID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          CaseID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          RoleInCase: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          AssignmentDate: {
            type: DataTypes.DATEONLY,
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
    },{
        sequelize,
        modelName:'StaffCaseAssignments',
        tableName:'StaffCaseAssignments',
        timestamps:false,
    }
)
module.exports=StaffCaseAssignments;