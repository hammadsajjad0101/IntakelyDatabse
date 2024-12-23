const { Model, DataTypes } = require('sequelize');

class LeadStatuses extends Model{
    /**
   * @param {object} models 
   */
  static associate(models){
    // One-to-Many relationship with Leads
this.hasMany(models.Leads,{
    foreignKey:'LeadStatusID',
    as:'Leads',
});
  }
}
module.exports=(sequelize)=>{
LeadStatuses.init(
 {
    LeadStatusID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    StatusName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    Description:{
        type:DataTypes.TEXT,
        allowNull:false,
    }
 },
 {
    sequelize,
    modelName:'LeadStatuses',
    tableName:'LeadStatuses',
    timestamps:false
 }
)
}
module.exports=LeadStatuses;