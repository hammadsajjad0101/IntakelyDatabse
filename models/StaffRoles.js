const { Model, DataTypes } = require('sequelize');

class StaffRoles extends Model {
  static associate(models) {
    // One-to-Many relationship with StaffUsers
    this.hasMany(models.StaffUsers, {
      foreignKey: 'RoleID',
      as: 'StaffUsers',
    });
  }
}

StaffRoles.init(
  {
    RoleID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RoleName: {
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
    modelName: 'StaffRoles',
    tableName: 'StaffRoles',
    timestamps: false,  
  }
);

module.exports = StaffRoles;
