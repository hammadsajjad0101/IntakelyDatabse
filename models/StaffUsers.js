const { Model, DataTypes } = require('sequelize');

class StaffUsers extends Model {
  static associate(models) {
    // Many-to-One relationship with LawFirms
    this.belongsTo(models.LawFirms, {
      foreignKey: 'LawFirmID',
      as: 'LawFirm',
    });

    // Many-to-One relationship with StaffRoles
    this.belongsTo(models.StaffRoles, {
      foreignKey: 'RoleID',
      as: 'Role',
    });

    // Many-to-One relationship with Departments
    this.belongsTo(models.Departments, {
      foreignKey: 'DepartmentID',
      as: 'Department',
    });

    // One-to-Many relationship with Tasks
    this.hasMany(models.Tasks, {
      foreignKey: 'AssignedToStaffID',
      as: 'Tasks',
    });

    // One-to-Many relationship with Appointments
    this.hasMany(models.Appointments, {
      foreignKey: 'StaffUserID',
      as: 'Appointments',
    });
  }
}

StaffUsers.init(
  {
    StaffID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'LawFirms',
        key: 'LawFirmID',
      },
    },
    FirstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    LastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      validate: {
        isEmail: true,
      },
    },
    PhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    DepartmentID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AI_AgentName: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    AI_AgentID: {
      type: DataTypes.STRING(100),
      allowNull: true,
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
    modelName: 'StaffUsers',
    tableName: 'StaffUsers',
    timestamps: true,
  }
);

module.exports = StaffUsers;
