const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    releaseDate: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    image: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    genre: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    screenShots: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    tags: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    requeriments_en: {
      type: DataTypes.JSON(DataTypes.STRING),
    },
    requeriments_ru: {
      type: DataTypes.JSON(DataTypes.STRING),
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
