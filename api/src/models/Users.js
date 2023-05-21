const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Users", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false // desabilita la auto-incrementacion
      },
      
      user: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      fullname: {
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

      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },     

      image: {
        type: DataTypes.STRING,
      },

      phone: {
        type: DataTypes.STRING,
      },

      tac: {
        type: DataTypes.BOOLEAN,
      },

      newsLetter: {
        type: DataTypes.BOOLEAN,
      },
    }, {
        hooks: {
          beforeCreate: (game) => {
            if (game.releaseDate) {
              const parts = game.releaseDate.split('-');
              const formattedDate = `${parts[2]}/${parts[1]}/${parts[0].slice(2)}`;
              game.releaseDate = formattedDate;
            }
          },
          beforeUpdate: (game) => {
            if (game.releaseDate) {
              const parts = game.releaseDate.split('-');
              const formattedDate = `${parts[2]}/${parts[1]}/${parts[0].slice(2)}`;
              game.releaseDate = formattedDate;
            }
          },
        },
        timestamp: false,
      });
    };