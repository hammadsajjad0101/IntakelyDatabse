const { Model, DataTypes } = require('sequelize');

class LeadPipeline extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One relationship with Leads
    this.belongsTo(models.Leads, {
      foreignKey: 'LeadID',
      as: 'Lead',
    });

    // Many-to-One relationship with LeadPipelineStages
    this.belongsTo(models.LeadPipelineStages, {
      foreignKey: 'StageID',
      as: 'Stage',
    });
  }
}

LeadPipeline.init(
  {
    PipelineID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    LeadID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    StageID: {
      type: DataTypes.INTEGER,
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
  },
  {
    sequelize,
    modelName: 'LeadPipeline',
    tableName: 'LeadPipeline',
    timestamps: false,
  }
);

module.exports = LeadPipeline;
