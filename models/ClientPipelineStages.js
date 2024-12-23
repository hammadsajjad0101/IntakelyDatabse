const { Model, DataTypes } = require('sequelize');

class ClientPipelineStages extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // One-to-Many relationship with ClientPipeline
    this.hasMany(models.ClientPipeline, {
      foreignKey: 'StageID',
      as: 'ClientPipelineEntries',
    });
  }
}

ClientPipelineStages.init(
  {
    StageID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    StageName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'ClientPipelineStages',
    tableName: 'ClientPipelineStages',
    timestamps: false,
  }
);

module.exports = ClientPipelineStages;
