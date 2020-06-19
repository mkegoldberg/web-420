/*
============================================
; Title:  API Routes
; Author: Mike Goldberg
; Date:   May 4 2020
; Description: REST API
;===========================================
*/

var express = require('express');
var checkToken = require('../check-token');
var router = express.Router();


var auth_controller = require('../controllers/authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', checkToken, auth_controller.user_token);


// Login request
router.post('/auth/login', auth_controller.user_login);


// Logout request
router.get('/auth/logout', auth_controller.user_logout);


module.exports = router;
