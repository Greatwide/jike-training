//node.js后台数据库处理：连接、增、删、改
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db = require('./db.js');
var connection = mysql.createPool(db);
/* 后台路由页面. */
//获取所有记录
router.get('/getallnews', function(req, res, next) {
    connection.query('SELECT * From news  order by id DESC', function(err, rows) {
        res.json(rows);
    })
});

//修改
router.post('/update', function(req, res) {
    var newsid = req.body.id;
    var newstype = req.body.newstype;
    var newstitle = req.body.newstitle;
    var newstime = req.body.newstime;
    var newssrc = req.body.newssrc;
    var newsimg = req.body.newsimg;

    connection.query('UPDATE news SET newstitle=?,newstype=?,newsimg=?,newstime=? WHERE id=?', [newstitle, newstype, newsimg, newstime, newsid], function(err, rows) {

        res.json(rows);
        console.log(rows.changedRows);
    })

});

//根据id获取记录
router.get('/curnews', function(req, res, next) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM news where id=?', [newsid], function(err, rows) {
        res.json(rows);
    })
});

//删除指定id的记录
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM news WHERE id=?', [newsid], function(err, result) {
        res.json(result);
        console.log(result.affectedRows);
    })
});


//插入一条记录
router.post('/insert', function(req, res) {

    var newstype = req.body.newstype;
    var newstitle = req.body.newstitle;
    var newstime = req.body.newstime;
    var newssrc = req.body.newssrc;
    var newsimg = req.body.newsimg;

    connection.query("INSERT INTO news(newstitle,newstype,newsimg,newstime,newssrc)VALUES(?,?,?,?,?)", [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        res.json(result);
        console.log(result.insertId);
    })
});

module.exports = router;
