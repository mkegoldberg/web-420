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
