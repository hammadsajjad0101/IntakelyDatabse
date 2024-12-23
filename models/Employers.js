const { Model, DataTypes } = require('sequelize');

class Employers extends Model {
  static associate(models) {
    // Many-to-One relationship with Clients
    this.belongsTo(models.Clients, {
      foreignKey: 'ClientID',
      as: 'ClientEmployer',
    });
  }
}

Employers.init(
  {
    EmployerID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ClientID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Position: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    StartDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    Notes: {
      type: DataTypes.TEXT,
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
    modelName: 'Employers',
    tableName: 'Employers',
    timestamps: true, 
  }
);

module.exports = Employers;
