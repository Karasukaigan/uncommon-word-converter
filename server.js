/**
 * 用Node.js+Express搭建一个本地服务器。
 * 
 * Author：Karasukaigan
 * GitHub：https://github.com/Karasukaigan
 */

var express = require('express');
var app = express();
var port = 2333;
var isDebugMode = true;

app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

var server = app.listen(port, function () {
    console.log("The server has started.");
    console.log("URL: " + "http://127.0.0.1:" + port);
})