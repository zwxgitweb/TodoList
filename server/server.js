const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const serverConfig = require('./serverConfig');

// 实例App
const app = express();

// 挂载bodyParser
app.use(bodyParser.json());

// 设置跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'content-type')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next();
})

// 服务挂载
serverConfig(app);
