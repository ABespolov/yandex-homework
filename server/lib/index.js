"use strict";
var express = require("express");
var favicon = require("express-favicon");
var path = require("path");
var port = process.env.PORT || 8000;
var app = express();

app.get("/ping", function (req, res) {
    res.send("pong");
});


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join('../../client/build')));
    //
    app.get('*', function (req, res) {
        res.sendfile(path.join('../../client/build/index.html'));
    });
}


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '../../client/public/index.html'));
});

app.listen(port, function (req, res) {
    console.log(`server listening on port: ${port}`);
});
