const { Model, DataTypes } = require('sequelize');

class EmploymentTypes extends Model {
  static associate(models) {
    // One-to-Many relationship with StaffUsers
    this.hasMany(models.StaffUsers, {
      foreignKey: 'EmploymentTypeID',
      as: 'StaffUsers',
    });
  }
}

EmploymentTypes.init(
  {
    EmploymentTypeID: {
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
  },
  {
    sequelize,
    modelName: 'EmploymentTypes',
    tableName: 'EmploymentTypes',
    timestamps: false, 
  }
);

module.exports = EmploymentTypes;
