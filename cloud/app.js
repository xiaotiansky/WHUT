// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser);

app.get('/',function(req,res){
    res.render('index',{message:'yunian'});
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();

module.exports = app;