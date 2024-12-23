const {Model,DataTypes}=require('sequelize');

class MatterStatuses extends Model{
    static associate(models) {
        // One-to-Many relationship with Cases
        MatterStatuses.hasMany(models.Cases, {
          foreignKey: 'MatterStatusID',
          as: 'Cases',
        });
      }
}
MatterStatuses.init(
    {
        MatterStatusID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          StatusName: {
            type: DataTypes.STRING(100),
            allowNull: false,
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
    },
    {
        sequelize,
        modelName:'MatterStatuses',
        tableName:'MatterStatuses',
        timestamps:false,
    }
)
module.exports=MatterStatuses;