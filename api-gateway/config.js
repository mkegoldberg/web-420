/*
============================================
; Title:  Config File
; Author: Mike Goldberg
; Date:   May 4 2020
; Description: REST API
;===========================================
*/

var config = {};

config.web = {};

config.web.port = process.env.PORT || '3000';

config.web.secret = 'topsecret';

module.exports = config;
