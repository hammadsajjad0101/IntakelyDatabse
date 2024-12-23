const {Model,DataTypes}=require('sequelize');

class CaseStages extends Model{
    static associate(models) {
        // Many-to-One relationship with Cases
        CaseStages.belongsTo(models.Cases, {
          foreignKey: 'CaseID',
          as: 'Cases',
        });
      }
}
CaseStages.init(
    {
        CaseStageID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
          },
          CaseID: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          StageName: {
            type: DataTypes.STRING(100),
            allowNull: false,
          },
          EntryDateTime: {
            type: DataTypes.DATE,
            allowNull: false,
          },
          ExitDateTime: {
            type: DataTypes.DATE,
            allowNull: true,
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
        modelName:'CaseStages',
        tableName:'CaseStages',
        timestamps:false,
    }
)
module.exports=CaseStages;