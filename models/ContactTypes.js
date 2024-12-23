const { Model, DataTypes } = require('sequelize');

class ContactTypes extends Model {
  static associate(models) {
    // One-to-Many relationship with Contacts
    this.hasMany(models.Contacts, {
      foreignKey: 'ContactTypeID',
      as: 'contacts',
    });
  }
}

ContactTypes.init(
  {
    ContactTypeID: {
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
    modelName: 'ContactTypes',
    tableName: 'ContactTypes',
    timestamps: false, 
  }
);

module.exports = ContactTypes;
