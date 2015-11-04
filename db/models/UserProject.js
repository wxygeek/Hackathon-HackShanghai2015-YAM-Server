'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserProject', {
    UserId: {
      type: DataTypes.INTEGER
    },
    ProjectId: {
      type: DataTypes.INTEGER
    }
  }, {
    indexes: [{
      fields: ['ProjectId', 'UserId']
    }, {
      fields: ['UserId', 'ProjectId']
    }]
  });
};