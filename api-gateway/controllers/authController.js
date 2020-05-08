/*
============================================
; Title:  Controller
; Author: Mike Goldberg
; Date:   May 4 2020
; Description: REST API
;===========================================
*/

var User = require('../models/user');

// Register a new user on POST
exports.user_register = function (req, res) {
  res.send('NOT IMPLEMENTED: User registration POST');
};

// Verify token on GET
exports.user_token = function (req, res) {
  res.send('NOT IMPLEMENTED: User token lookup GET');
};
