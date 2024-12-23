const { Model, DataTypes } = require('sequelize');

class TimeCards extends Model{
static associations(models){
    this.belongsTo(models.StaffUsers,{
        foreignKey:'StaffID',
        as: 'StaffMember',
    });
    this.belongsTo(models.Cases, {
        foreignKey: 'CaseID',
        as: 'CaseDetails',
      });
}
}
TimeCards.init(
    {
        TimeCardID: {
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
        Date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        StartTime: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        EndTime: {
          type: DataTypes.TIME,
          allowNull: false,
        },
        Duration: {
          type: DataTypes.DECIMAL(5, 2),
          allowNull: false,
        },
        Description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        Billable: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
        Created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName:'TimeCards',
        tableName:'TimeCards',
        timestamps:true,
      }
)
module.exports=TimeCards;