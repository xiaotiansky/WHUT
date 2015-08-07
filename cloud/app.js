// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var ejs = require('ejs');

// 设置 view 引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.bodyParser());

app.get('/', function(req, res) {
    res.render('index', { currentTime: new Date() });
});

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/hello', function(req, res) {
  res.render('hello', { message: 'yunian' });
});

app.get('/aboutsky',function(req,res){
   res.render('aboutsky', {message:'yunian'});
});

// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();