'use strict';

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KeyValue', {
    key: {
      type: DataTypes.STRING
    },
    value: {
      type: DataTypes.STRING
    }
  }, {
    indexes: [{
      fields: ['key', 'id']
    }, {
      fields: ['id']
    }],
    classMethods: {
      getValue: function*(key) {
        var keyValue = yield this.find({
          where: {
            key: key
          }
        });
        return keyValue ? keyValue.value : null;
      }
    }
  });
};