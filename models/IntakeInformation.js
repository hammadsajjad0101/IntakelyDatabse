const { Model, DataTypes } = require('sequelize');

class IntakeInformation extends Model {
    /**
     * @param {object} models 
     */
    static associate(models) {
        // Many-to-One relationship with Leads (LeadID)
        this.belongsTo(models.Leads, {
          foreignKey: 'LeadID',
          as: 'lead', 
        });
    
        // Many-to-One relationship with Clients (ClientID)
        this.belongsTo(models.Clients, {
          foreignKey: 'ClientID',
          as: 'client',
        });
    }
}

IntakeInformation.init(
  {
    IntakeID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    LeadID: {
        type: DataTypes.INTEGER,
        allowNull: true, 
    },
    ClientID: {
        type: DataTypes.INTEGER,
        allowNull: true, 
    },
    StartDateTime: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
    EndDateTime: {
        type: DataTypes.DATE,
        allowNull: true, 
    },
    Notes: {
        type: DataTypes.TEXT,
        allowNull: true, 
    },
  },
  {
    sequelize,
    modelName: 'IntakeInformation',
    tableName: 'IntakeInformation',
    timestamps: false, 
  }
);

module.exports = IntakeInformation;
