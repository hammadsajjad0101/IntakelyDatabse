const { Model, DataTypes } = require('sequelize');

class ClientStatuses extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // One-to-Many relationship with Clients
    this.hasMany(models.Clients, {
      foreignKey: 'ClientStatusID',
      as: 'Clients',
    });
  }
}

ClientStatuses.init(
  {
    ClientStatusID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    StatusName: {
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
    modelName: 'ClientStatuses',
    tableName: 'ClientStatuses',
    timestamps: false,
  }
);

module.exports = ClientStatuses;
