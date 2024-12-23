const { Model, DataTypes } = require('sequelize');

class IntakeResponses extends Model {
    /**
     * @param {object} models 
     */
    static associate(models) {
        // Many-to-One relationship with IntakeInformation
        this.belongsTo(models.IntakeInformation, {
          foreignKey: 'IntakeID',
          as: 'intakeInformation',
        });
    
        // Many-to-One relationship with IntakeQuestions 
        this.belongsTo(models.IntakeQuestions, {
          foreignKey: 'QuestionID',
          as: 'intakeQuestion',
        });
    }
}

IntakeResponses.init(
  {
    ResponseID: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    IntakeID: {
        type: DataTypes.INTEGER,
        allowNull: false, 
    },
    QuestionID: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ResponseText: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'IntakeResponses',
    tableName: 'IntakeResponses',
    timestamps: false, 
  }
);

module.exports = IntakeResponses;

