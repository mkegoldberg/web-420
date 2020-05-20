
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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
