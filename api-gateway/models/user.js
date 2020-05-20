/*
============================================
; Title:  user.js
; Author: Mike Goldberg
; Date:   04 April 2020
; Description: User Database Model
;===========================================
*/

// Require statements
var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String
});

module.exports = mongoose.model('User', userSchema);

// user.save is used to add a new user to the database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = { _id: id };
  User.findById(query, callback);
};
