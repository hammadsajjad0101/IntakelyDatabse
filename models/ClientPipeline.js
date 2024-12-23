const { Model, DataTypes } = require('sequelize');

class ClientPipeline extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One relationship with Clients
    this.belongsTo(models.Clients, {
      foreignKey: 'ClientID',
      as: 'Clients',
    });

    // Many-to-One relationship with ClientPipelineStages
    this.belongsTo(models.ClientPipelineStages, {
      foreignKey: 'StageID',
      as: 'ClientPipelineStages',
    });
  }
}

ClientPipeline.init(
  {
    ClientPipelineID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    ClientID: {
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
    modelName: 'ClientPipeline',
    tableName: 'ClientPipeline',
    timestamps: false,
  }
);

module.exports = ClientPipeline;
