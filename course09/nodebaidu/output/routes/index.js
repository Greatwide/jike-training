var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var db = require('./db.js');
/* 主页获取新闻的请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
    var newsloaded = req.query.newsloaded;
    console.log(newsloaded);
    var connection = mysql.createConnection(db);
    connection.connect();
    //每次只加载10条
    var sql = 'SELECT * FROM news WHERE newstype=' + "'" + newstype + "'" + ' LIMIT ' + newsloaded + ',10';
    //console.log(sql);
    connection.query(sql, function(err, rows, fields) {
        res.json(rows);
    });

});

module.exports = router;
