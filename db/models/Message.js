'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Message', {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'default'
    },
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