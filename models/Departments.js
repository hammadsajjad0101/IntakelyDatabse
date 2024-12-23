const { Model, DataTypes } = require('sequelize');

class Departments extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // One-to-Many relationship with StaffUsers
    this.hasMany(models.StaffUsers, {
      foreignKey: 'DepartmentID',
      as: 'StaffMembers',
    });
  }
}

Departments.init(
  {
    DepartmentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DepartmentName: {
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
    modelName: 'Departments',
    tableName: 'Departments',
    timestamps: false,
  }
);

module.exports = Departments;
