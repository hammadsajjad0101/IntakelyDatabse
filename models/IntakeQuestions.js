const { Model, DataTypes } = require('sequelize');

class IntakeQuestions extends Model {
  static associate(models) {
    // Many-to-One relationship with PracticeAreas
    this.belongsTo(models.PracticeAreas, {
      foreignKey: 'PracticeAreaID',
      as: 'PracticeAreas', 
    });
  }
}

IntakeQuestions.init(
  {
    QuestionID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    PracticeAreaID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    QuestionText: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    QuestionType: {
      type: DataTypes.ENUM('Text', 'MultipleChoice', 'Boolean', 'Date'), 
      allowNull: false,
    },
    IsRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false, 
    },
  },
  {
    sequelize,
    modelName: 'IntakeQuestions',
    tableName: 'IntakeQuestions',
    timestamps: false, 
  }
);

module.exports = IntakeQuestions;

