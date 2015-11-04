'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ProjectTag', {
    ProjectId: {
      type: DataTypes.INTEGER
    },
    TagId: {
      type: DataTypes.INTEGER
    }
  }, {
    indexes: [{
      fields: ['ProjectId', 'TagId']
    }, {
      fields: ['TagId', 'ProjectId']
    }]
  });
};