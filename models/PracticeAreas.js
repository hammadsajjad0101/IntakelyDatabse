const { Model, DataTypes } = require('sequelize');

class PracticeAreas extends Model {
  static associate(models) {
    // One-to-Many relationship with Specialties
    this.hasMany(models.Specialties, {
      foreignKey: 'PracticeAreaID',
      as: 'Specialties', 
    });
  }
}

PracticeAreas.init(
  {
    PracticeAreaID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
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
    modelName: 'PracticeAreas',
    tableName: 'PracticeAreas',
    timestamps: false, 
  }
);

module.exports = PracticeArea;
