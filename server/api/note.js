const express = require("express");
const router = express.Router();
const { createNote, getNotes } = require("../db.js");
const { data } = require("react-router");

router.post("/", (req, res) => {
    const { title, content } = req.body;
    createNote(title, content, (err, note) => {
        if (err)
            return res.status(500).json({
                error: err.message,
                success: false,
            });
        res.status(201).json({
            data: note,
            success: true,
        });
    });
});

router.get("/:title", (req, res) => {
    const title = req.params.title;
    getNotes(title, (err, notes) => {
        if (err)
            return res.status(500).json({
                error: err.message,
                success: false,
            });
        res.status(200).json({
            data: notes,
            success: true,
        });
    });
});

module.exports = router;
