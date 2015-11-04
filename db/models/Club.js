'use strict';

var utils = require('../../utils');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Club', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 5],
        notEmpty: true
      }
    },
    introduction: {
      type: DataTypes.STRING,
      allowNull: true
    },
    avatarFileKey: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    getterMethods: {
      avatarFileUrl: function() {
        return utils.getFileUrl(this.avatarFileKey);
      }
    }
  });
};