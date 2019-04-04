const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const port = process.env.PORT || 8000;
const app = express();

app.get("/ping", (req, res) => {
    res.send("pong");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}
app.listen(port, (req, res) => {
    // console.log(`server listening on port: ${port}`);
});
