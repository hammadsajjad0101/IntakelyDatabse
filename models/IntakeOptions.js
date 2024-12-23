const { Model, DataTypes } = require('sequelize');

class IntakeOptions extends Model {
  static associate(models) {
    // Many-to-One relationship with IntakeQuestions
    this.belongsTo(models.IntakeQuestions, {
      foreignKey: 'QuestionID',
      as: 'IntakeQuestions', 
    });
  }
}

IntakeOptions.init(
  {
    OptionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    QuestionID: {
      type: DataTypes.INTEGER,
      allowNull: false, 
    },
    OptionText: {
      type: DataTypes.STRING(255),
      allowNull: false, 
    },
  },
  {
    sequelize,
    modelName: 'IntakeOptions',
    tableName: 'IntakeOptions',
    timestamps: false, 
  }
);

module.exports = IntakeOptions;

