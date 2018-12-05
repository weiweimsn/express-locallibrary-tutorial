var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send('Wiki Home Page');
});

router.get('/about', function(req, res){
    res.send('Wiki About Page');
});

module.exports = router;