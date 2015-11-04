'use strict';

var Sequelize = require('sequelize');
var sqlite3 = require('sqlite3');
var config = require('../config');
var path = require('path');

var sequelize = new Sequelize(config.db.database, null, null, config.db);

var models = {};
exports.models = models;

var modelNames = ['Bulletin', 'Club', 'KeyValue', 'Message', 'News', 'Project', 'ProjectTag', 'Tag', 'User', 'UserProject'];

exports.define = function() {
  modelNames.forEach(function(modelName) {
    models[modelName] = sequelize.import(path.join(__dirname, 'models', modelName + '.js'));
  });
};

exports.setAssociations = function() {
  models.User.belongsToMany(models.Club, {
    through: 'UserClub'
  });
  models.Club.belongsToMany(models.User, {
    through: 'UserClub'
  });
  models.Club.hasMany(models.Bulletin);
  models.Club.hasMany(models.News);
  models.Club.belongsTo(models.User, {
    as: 'President',
    foreignKey: 'PresidentUserId'
  });

  models.User.belongsToMany(models.Project, {
    through: 'UserProject'
  });
  models.Project.belongsToMany(models.User, {
    through: 'UserProject'
  });
  models.Project.belongsToMany(models.Tag, {
    through: 'ProjectTag'
  });
  models.Tag.belongsToMany(models.Project, {
    through: 'ProjectTag'
  });

  models.Message.belongsTo(models.User, {
    as: 'Creator',
    foreignKey: 'CreatorUserId'
  });
  models.Message.belongsTo(models.User, {
    as: 'TargetUser',
    foreignKey: 'TargetUserId'
  });
};

//建立ORM
exports.define();
exports.setAssociations();

exports.init = function*() {
  var syncModelsArray = modelNames.map(function(modelName) {
    return models[modelName].sync({
      force: true
    });
  });

  yield syncModelsArray;
};