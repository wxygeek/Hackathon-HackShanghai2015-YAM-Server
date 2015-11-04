'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('News', {
    content: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};