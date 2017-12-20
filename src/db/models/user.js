'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      walletAddress:
      DataTypes.STRING
    },
    {
      classMethods: {
        associate: function (models) {
          // associations can be defined here
        }
      }
    });
  return User;
};
