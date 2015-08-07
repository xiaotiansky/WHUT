/**
 * Created by Administrator on 2015-08-07.
 */
var app = require('./app');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 3000);
app.listen(PORT, function () {
    console.log('Node app is running, port:', PORT);
});
