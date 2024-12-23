const { Model, DataTypes } = require('sequelize');

class TeamMembers extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One relationship with Teams (TeamID)
    this.belongsTo(models.Teams, {
      foreignKey: 'TeamID',
      as: 'Team',
    });

    // Many-to-One relationship with StaffUsers (StaffID)
    this.belongsTo(models.StaffUsers, {
      foreignKey: 'StaffID',
      as: 'Staff',
    });
  }
}

TeamMembers.init(
  {
    TeamMemberID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    TeamID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    StaffID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    RoleInTeam: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    Created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'TeamMembers',
    tableName: 'TeamMembers',
    timestamps: false, 
  }
);

module.exports = TeamMembers;
