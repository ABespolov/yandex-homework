const express = require("express");
const favicon = require("express-favicon");
const path = require("path");
const app = express();
const data = require("../data.json");
const Notes = require("./modules/Notes");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;

const nts = new Notes();

Notes.factory(nts, data.notes, data.colors, data.tags);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/cards", (req: any, res: any) => {
    if (req.query.color) {
        const colorObj = data.colors.find((item: any) =>
            item.id === +req.query.color);
        if (colorObj) {
            const cards = nts.getNotesByColor(colorObj.color);
            res.send(cards);
        } else {
            res.status(400).send("Incorrect color");
        }

    } else {
        res.send(nts.getAllNotes(false));
    }
});

app.get("/api/archive", (req: any, res: any) => {
    if (req.query.id) {
        nts.addToArchive(+req.query.id);
        res.status(200).send("Added");
    } else {
        res.send(nts.getAllNotes(true));
    }
});

app.post("/api/add", (req: any, res: any) => {
    console.log(JSON.stringify(req.body));
    nts.addNote(req.body);
    res.send(nts.getAllNotes(false));
});

app.get("/api/delete", (req: any, res: any) => {
    nts.deleteNote(req.query.id);
});

app.use(express.static(path.join(__dirname, "/../../client/build")));
app.get("*", (req: any, res: any) => {
    res.sendFile(path.join(__dirname, "/../../client/build/index.html"));
});

app.listen(port);
