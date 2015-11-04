'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bulletin', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAchived: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });
};