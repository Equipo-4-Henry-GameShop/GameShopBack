const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false // desabilita la auto-incrementacion
      },
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      userAdmin: {
        type: DataTypes.BOOLEAN,
        default: true,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};