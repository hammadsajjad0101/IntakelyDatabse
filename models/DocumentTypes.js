const{Model,DataTypes}=require('sequelize');

class DocumentTypes extends Model{
    static associate(models) {
// Many-to-One relationship with DocumentTypes
DocumentTypes.belongsTo(models.Documents, {
    foreignKey: 'DocumentTypeID',
    as: 'Documents',
  });
}
}
DocumentTypes.init(
    {
        DocumentTypeID:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        DocumentName:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Description:{
            type:DataTypes.STRING,
            allowNull:true,
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
        modelName:'DocumentTypes',
        tableName:'DocumentTypes',
        timestamps:false,
    }
)
module.exports=DocumentTypes;