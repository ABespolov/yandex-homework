const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const app = express();
const data = require("../data.json");
const Notes = require("./modules/Notes");
const port = process.env.PORT || 8000;

const nts = new Notes();

Notes.factory(nts, data.notes, data.colors, data.tags);

app.get("/api/cards", (req: any, res: any) => {
    if (req.query.color) {
        const colorObj = data.colors.find((item: any) =>
            item.id === +req.query.color);
        if (colorObj) {
            const cards = nts.getNotesByColor(colorObj.color);
            res.send(cards);
        } else {
            res.status(400).send('Incorrect color');
        }

    } else {
        res.send(nts.toArray());
    }
});

app.post('/', function (req: any, res: any) {
    console.log(req.body.user.name);
});

app.use(express.static(path.join(__dirname, '/../../client/build')));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/../../client/build')));
    app.get('*', (req: any, res: any) => {
        res.sendFile(path.join(__dirname = '/../../client/build/index.html'));
    })
}

app.get('*', (req: any, res: any) => {
    res.sendFile(path.join(__dirname + '/../../client/public/index.html'));
});

app.listen(port, (req: any, res: any) => {
// console.log(`server listening on port: ${port}`);
});