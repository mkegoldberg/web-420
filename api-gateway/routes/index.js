/*
============================================
; Title:  API Gateway
; Author: Mike Goldberg
; Date:   May 4 2020
; Description: REST
;===========================================
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
