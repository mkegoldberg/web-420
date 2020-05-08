/*
============================================
; Title:  API Routes
; Author: Mike Goldberg
; Date:   May 4 2020
; Description: REST API
;===========================================
*/

var express = require('express');
var router = express.Router();


var auth_controller = require('../controllers/authController');


// POST request for registering a user
router.post('/auth/register', auth_controller.user_register);


// GET request for verifying user tokens
router.get('/auth/token', auth_controller.user_token);


module.exports = router;
