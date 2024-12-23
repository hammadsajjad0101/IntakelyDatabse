'use strict';
const { Model, DataTypes } = require('sequelize');

class Specialties extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One relationship with PracticeAreas
    this.belongsTo(models.PracticeAreas, {
      foreignKey: 'PracticeAreaID',
      as: 'PracticeAreas',
    });
  }
}

  Specialties.init(
    {
      SpecialtyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      PracticeAreaID: {
        type: DataTypes.INTEGER,
        allowNull: false,

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
      modelName: 'Specialties',
      tableName: 'Specialties',
      timestamps: false, 
    }
  );

  module.exports=Specialties
