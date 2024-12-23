const { Model, DataTypes } = require('sequelize');

class Teams extends Model {
  /**
   * @param {object} models 
   */
  static associate(models) {
    // Many-to-One relationship with LawFirms
    this.belongsTo(models.LawFirms, {
      foreignKey: 'LawFirmID',
      as: 'LawFirm',
    });

    // Many-to-Many relationship with StaffUsers via TeamMembers
    this.belongsToMany(models.StaffUsers, {
      through: models.TeamMembers,
      foreignKey: 'TeamID',
      otherKey: 'StaffID',
      as: 'StaffMembers',
    });
  }
}

Teams.init(
  {
    TeamID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    LawFirmID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TeamName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    modified_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Teams',
    tableName: 'Teams',
    timestamps: false, 
  }
);

module.exports = Teams;
