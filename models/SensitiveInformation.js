const { Model, DataTypes } = require('sequelize');

class SensitiveInformation extends Model {
  static associate(models) {
    // Many-to-One relationship with Clients
    this.belongsTo(models.Clients, {
      foreignKey: 'ClientID',
      as: 'ClientSensitiveInfo',
    });
  }
}

SensitiveInformation.init(
  {
    SensitiveInfoID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ClientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clients',
        key: 'ClientID',
      },
    },
    DataType: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    EncryptedData: {
      type: DataTypes.BLOB('long'),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'SensitiveInformation',
    tableName: 'SensitiveInformation',
    timestamps: true, 
  }
);

module.exports = SensitiveInformation;
