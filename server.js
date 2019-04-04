const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}
//build mode
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

app.get("/ping", (req, res) => {
    res.send("pong");
});

app.listen(port, (req, res) => {
    // console.log(`server listening on port: ${port}`);
});
