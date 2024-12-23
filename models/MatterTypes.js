const { Model, DataTypes } = require("sequelize");

class MatterTypes extends Model {
  static associate(models) {
    // One-to-Many relationship with Cases
    MatterTypes.hasMany(models.Cases, {
      foreignKey: "MatterTypeID",
      as: "Cases",
    });
  }
}
MatterTypes.init(
  {
    MatterTypeID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    TypeName: {
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
    modelName: "MatterTypes",
    tableName: "MatterTypes",
    timestamps: false,
  }
);
module.exports = MatterTypes;
