var path = require('path');
var express = require('express')
var app = express()
app.get('/whoami', function (req, res) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var os = req.headers['user-agent']
    var language = req.headers['accept-language'].split(',')[0]
    var result = {
        ipaddress: ip,
        language: language,
        software: os
    }
    res.send(result)
})
app.listen(8080)