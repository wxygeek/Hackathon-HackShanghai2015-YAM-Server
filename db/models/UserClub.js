'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserClub', {
    UserId: {
      type: DataTypes.INTEGER
    },
    ClubId: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.ENUM('apply', 'reject', 'belongsto', 'quit', 'retire'),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING
    }
  }, {
    indexes: [{
      fields: ['ClubId', 'UserId', 'status']
    }, {
      fields: ['UserId', 'ClubId', 'status']
    }]
  });
};