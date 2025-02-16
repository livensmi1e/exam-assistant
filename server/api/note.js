const express = require("express");
const router = express.Router();
const { createNote, getNotes } = require("../db.js");

router.post("/", (req, res) => {
    const { title, content } = req.body;
    createNote(title, content, (err, note) => {
        if (err)
            return res.status(500).json({ error: err.message, success: false });
        note.success = true;
        res.status(201).json(note);
    });
});

router.get("/", (req, res) => {
    const title = req.params.title;
    getNotes(title, (err, note) => {
        if (err)
            return res.status(500).json({ error: err.message, success: false });
        note.success = true;
        res.status(200).json(note);
    });
});

module.exports = router;
