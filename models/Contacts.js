const { Model, DataTypes } = require('sequelize');

class Contacts extends Model {
static associations (models){
     // Many-to-One association with ContactTypes
    this.belongsTo(models.ContactType,{
        foreignKey: 'contactTypeId',
        as: 'contactType',
    });

    // Many-to-One association with Companies 
    this.belongsTo(models.Company, {
        foreignKey: 'companyId',
        as: 'company', 
        allowNull: true,
      });
}
}

  Contacts.init(
    {
      ContactID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      ContactTypeID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      CompanyID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Notes: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Contacts',
      tableName: 'Contacts',
      timestamps: true, 
    }
  );
module.exports=Contacts;
