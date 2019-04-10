const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

app.get("/ping", (req: any, res: any) => {
    res.send("pong");
});


//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    //
    app.get('*', (req: any, res: any) => {
        res.sendfile(path.join(__dirname = 'client/build/index.html'));
    })
}
//build mode
app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname+'client/public/index.html'));
});

app.listen(port, (req: any, res: any) => {
    // console.log(`server listening on port: ${port}`);
});